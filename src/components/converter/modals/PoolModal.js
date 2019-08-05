// TODO refactoring (Presentational and Container)
// TODO DRY
import React, { Component } from 'react'
import { Button, ButtonGroup, Alert, Form,  Modal, Badge } from "react-bootstrap"
import { inject, observer } from 'mobx-react'
import { hexToNumberString, toWei, fromWei } from 'web3-utils'

import {
  ABISmartToken,
  ABIConverter,
  ABIBancorNetwork,
  BancorNetwork,
  //EtherscanLink
} from '../../../config'

import getDirectionData from '../../../service/getDirectionData'
import getWeb3ForRead from '../../../service/getWeb3ForRead'
import getPath from '../../../service/getPath'

import { Typeahead } from 'react-bootstrap-typeahead'

class PoolModal extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    to:undefined,
    from:undefined,
    directionAmount:0,
    connectorSymbol:'',
    reciveSymbol:'',
    amountReturn:0,
    ShowModal:false,
    officialSmartTokenSymbols:null,
    unofficialSmartTokenSymbols:null,
    bancorTokensStorageJson:null,
    bancorNetworkContract: null,
    selectToOficial:true,
    selectFromOficial:true,
    web3:null,
    useERC20AsSelectFrom:true,
    useERC20AsSelectTo:false,
    requireApprove:false,
    sendFrom:undefined,
    sendTo:undefined,
    userBalanceFrom:0
    }
  }

  // helper for setState
  change = e => {
    if(typeof this.state[e.target.name] === "boolean"){
      this.setState({
        [e.target.name]: !this.state[e.target.name]
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }


  componentDidUpdate(prevProps, prevState){
    // Update rate by onChange
    if(prevState.from !== this.state.from || prevState.to !== this.state.to || prevState.directionAmount !== this.state.directionAmount){
      this.getRate()
      this.checkRequireApprove()
      // this.setTokensData()
    }

    // Update state with tokens data
    if (prevProps.MobXStorage.bancorTokensStorageJson !== this.state.bancorTokensStorageJson) {
      const officialSymbols = this.props.MobXStorage.officialSymbols
      const unofficialSymbols = this.props.MobXStorage.unofficialSymbols
      let officialSmartTokenSymbols = this.props.MobXStorage.officialSmartTokenSymbols

      // delete BNT from smart tokens
      officialSmartTokenSymbols = officialSmartTokenSymbols.filter(e => e !== 'BNT')

      const unofficialSmartTokenSymbols = this.props.MobXStorage.unofficialSmartTokenSymbols
      const bancorTokensStorageJson = this.props.MobXStorage.bancorTokensStorageJson
      this.setState({
        officialSymbols,
        unofficialSymbols,
        officialSmartTokenSymbols,
        unofficialSmartTokenSymbols,
        bancorTokensStorageJson
      })
    }
  }

  // set state addreses to and from and user balance from
  // not finished properly
  // setTokensData = async () => {
  //   if(this.state.to && this.state.from && this.props.MobXStorage){
  //     const { sendFrom, sendTo } = getDirectionData(
  //       this.state.from,
  //       this.state.to,
  //       this.state.bancorTokensStorageJson,
  //       this.state.useERC20AsSelectFrom,
  //       this.state.useERC20AsSelectTo
  //     )
  //     const web3 = this.props.MobXStorage.web3
  //     let userBalanceFrom
  //     if(this.state.from !== "ETH"){
  //       const token = web3.eth.Contract(ABISmartToken, sendFrom)
  //       userBalanceFrom = await token.methods.balanceOf(this.props.MobXStorage.accounts[0]).call()
  //       userBalanceFrom = web3.utils.fromWei(web3.utils.hexToNumberString(userBalanceFrom._hex))
  //     }else{
  //       userBalanceFrom = await web3.eth.getBalance((this.props.MobXStorage.accounts[0]))
  //       userBalanceFrom = web3.utils.fromWei(String(userBalanceFrom))
  //     }
  //     this.setState({ sendFrom, sendTo, userBalanceFrom })
  //   }
  // }

  // not need approve for ETH, BNT or smart token
  checkRequireApprove = () => {
    if(!this.state.useERC20AsSelectFrom || this.state.from === "ETH" || this.state.from === "BNT"){
      this.setState({ requireApprove: false})
    }else{
      this.setState({ requireApprove: true})
    }
  }

  // TODO DRY refactoring, all this methods in one file for POLL, TRADE, SEND modals
  // View rate
  getRate = async () => {
    if(this.state.from && this.state.to && this.state.directionAmount > 0){
      const web3 = getWeb3ForRead(this.props.MobXStorage.web3)
      const bancorNetworkContract = web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
      const { objPropsFrom, objPropsTo } = getDirectionData(
        this.state.from,
        this.state.to,
        this.state.bancorTokensStorageJson,
        this.state.useERC20AsSelectFrom,
        this.state.useERC20AsSelectTo
      )

      const path = getPath(
        this.state.from,
        this.state.to,
        this.state.bancorTokensStorageJson,
        objPropsFrom,
        objPropsTo
      )

      let amountReturn = await bancorNetworkContract.methods.getReturnByPath(
        path,
        toWei(this.state.directionAmount)
      ).call()

      if(amountReturn){
        amountReturn = Number(fromWei(hexToNumberString(amountReturn[0]._hex)))
      }else{
        amountReturn = 0
      }

      this.setState({
        reciveSymbol:this.state.to,
        amountReturn
      })
    }
    else{
      this.setState({ amountReturn:0 })
    }
  }

   // TODO DRY refactoring, all this methods in one file for POLL, TRADE, SEND modals
  // approve ERC20 standard
  approve = (reciver) => {
    if(this.state.from){
      const { sendFrom } = getDirectionData(
        this.state.from,
        this.state.to,
        this.state.bancorTokensStorageJson,
        this.state.useERC20AsSelectFrom,
        this.state.useERC20AsSelectTo
      )

      const token = this.props.MobXStorage.web3.eth.Contract(ABISmartToken, sendFrom)
      token.methods.approve(
        reciver,
        this.props.MobXStorage.web3.utils.toWei(String(this.state.directionAmount))
      ).send({from: this.props.MobXStorage.accounts[0]})
    }
    else{
      alert('Not correct input data')
    }
  }


  // choose an receiver (Converter or Bancor Network)
  // depending on the type of exchange (external or internal)
  wrapperApprove = async () => {
    if(this.state.to === "BNT" || this.state.from === "BNT"){
      console.log("Approve to converter")
      const { tokenInfoFrom } = getDirectionData(
        this.state.from,
        this.state.to,
        this.state.bancorTokensStorageJson,
        this.state.useERC20AsSelectFrom,
        this.state.useERC20AsSelectTo
      )

      const converterAddress = tokenInfoFrom.converterAddress
      this.approve(converterAddress)
    }else{
      console.log("Approve to BancorNetwork")
      this.approve(BancorNetwork)
    }
  }

  // TODO DRY refactoring, all this methods in one file for POLL, TRADE, SEND modals
  // trade between source and source
  claimAndConvert = () => {
    const web3 = this.props.MobXStorage.web3
    const bancorNetworkContract = web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
    const { objPropsFrom, objPropsTo } = getDirectionData(
      this.state.from,
      this.state.to,
      this.state.bancorTokensStorageJson,
      this.state.useERC20AsSelectFrom,
      this.state.useERC20AsSelectTo
    )
    const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson, objPropsFrom, objPropsTo)

    bancorNetworkContract.methods.claimAndConvert(path,
      toWei(this.state.directionAmount),
      1
    ).send({from: this.props.MobXStorage.accounts[0]})
    this.closeModal()
  }

  // TODO DRY refactoring, all this methods in one file for POLL, TRADE, SEND modals
  // trade between source and BNT
  // or if from === smart token
  quickConvert = () => {
    const web3 = this.props.MobXStorage.web3
    const { tokenInfoFrom, objPropsFrom, objPropsTo } = getDirectionData(
      this.state.from,
      this.state.to,
      this.state.bancorTokensStorageJson,
      this.state.useERC20AsSelectFrom,
      this.state.useERC20AsSelectTo
    )
    const converterContract = web3.eth.Contract(ABIConverter, tokenInfoFrom.converterAddress)
    const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson, objPropsFrom, objPropsTo)

    converterContract.methods.quickConvert(
      path,
      web3.utils.toWei(String(this.state.directionAmount)),
      1
    ).send({from: this.props.MobXStorage.accounts[0]})
    this.closeModal()
  }

  // TODO DRY refactoring, all this methods in one file for POLL, TRADE, SEND modals
  // in case if from === ETH
  convertFromETH = () => {
    const web3 = this.props.MobXStorage.web3
    const bancorNetworkContract = web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
    const { objPropsFrom, objPropsTo } = getDirectionData(
      this.state.from,
      this.state.to,
      this.state.bancorTokensStorageJson,
      this.state.useERC20AsSelectFrom,
      this.state.useERC20AsSelectTo
    )
    const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson, objPropsFrom, objPropsTo)
    const amount = web3.utils.toWei(String(this.state.directionAmount))

    bancorNetworkContract.methods.convert(path, amount, 1)
    .send({from: this.props.MobXStorage.accounts[0], value:amount })
    this.closeModal()
  }

  // internal and extarnal trade
  trade = () => {
  if(this.state.to && this.state.from && this.state.directionAmount > 0){
    if(this.state.to !== this.state.from){
      if(this.state.from === "ETH"){
        this.convertFromETH()
      }
      else if(this.state.from === "BNT" || !this.state.useERC20AsSelectFrom){
        this.quickConvert()
      }else if(this.state.to === "BNT" && this.state.from !== "ETH"){
        this.quickConvert()
      }
      else{
        this.claimAndConvert()
      }
    }
  }
  else{
    alert('Not correct input data')
  }
  }

  // reset states after close modal
  closeModal = () => this.setState({
    to:undefined,
    from:undefined,
    directionAmount:0,
    connectorSymbol:'',
    reciveSymbol:'',
    amountReturn:0,
    ShowModal:false,
    selectToOficial:true,
    selectFromOficial:true,
    useERC20AsSelectFrom:true,
    useERC20AsSelectTo:false
  })



// TODO move this to a Presentational component
  render(){
    return(
    <React.Fragment>
    {
      this.props.MobXStorage.bancorTokensStorageJson
      ?
      (
        <Button variant="primary" size="sm" onClick={() => this.setState({ ShowModal: true })}>
        Pool
        </Button>
      )
      :
      (<Badge variant="primary">loading data...</Badge>)
    }

    <Modal
      size="lg"
      show={this.state.ShowModal}
      onHide={() => this.closeModal()}
      aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
      <small>Pool relays</small>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {/*select from*/}
      <React.Fragment>
      {
        this.state.officialSmartTokenSymbols && this.state.unofficialSmartTokenSymbols
        ?
        (
          <React.Fragment>
          <Form.Group>
          <Form.Check
          name="selectFromOficial"
          type="checkbox"
          label="Show unofficial"
          onChange={e => this.change(e)}
          />
          <Form.Check
          type="checkbox"
          label="Show relays, hide tokens"
          onChange={e => this.setState({ useERC20AsSelectFrom: !this.state.useERC20AsSelectFrom })}
          checked={!this.state.useERC20AsSelectFrom}
          />
          </Form.Group>

          {
            this.state.selectFromOficial
            ?
            (
              <Typeahead
                  labelKey="fromOfficialTokens"
                  multiple={false}
                  id="officialTokens"
                  options={this.state.useERC20AsSelectFrom ? this.state.officialSymbols :this.state.officialSmartTokenSymbols}
                  onChange={(s) => this.setState({from: s[0]})}
                  placeholder="Choose a symbol for send"
              />
            )
            :
            (
              <Typeahead
                  labelKey="fromUnofficialTokens"
                  multiple={false}
                  id="unofficialTokens"
                  options={this.state.useERC20AsSelectFrom ? this.state.unofficialSymbols : this.state.unofficialSmartTokenSymbols}
                  onChange={(s) => this.setState({from: s[0]})}
                  placeholder="Choose a symbol for send"
              />
            )
          }
          </React.Fragment>
        )
        :
        (null)
      }
      </React.Fragment>

      <br/>

      {/*select to*/}
      <React.Fragment>
      {
        this.state.officialSmartTokenSymbols && this.state.unofficialSmartTokenSymbols
        ?
        (
          <React.Fragment>
          <Form.Group>
          <Form.Check
          name="selectToOficial"
          type="checkbox"
          label="Show unofficial"
          onChange={e => this.change(e)}
          />
          <Form.Check
          type="checkbox"
          label="Show relays, hide tokens"
          onChange={e => this.setState({ useERC20AsSelectTo: !this.state.useERC20AsSelectTo})}
          checked={!this.state.useERC20AsSelectTo}
          />
          </Form.Group>

          {
            this.state.selectToOficial
            ?
            (
              <Typeahead
                  labelKey="fromOfficialTokens"
                  multiple={false}
                  id="officialTokens"
                  options={this.state.useERC20AsSelectTo ? this.state.officialSymbols : this.state.officialSmartTokenSymbols}
                  onChange={(s) => this.setState({to: s[0]})}
                  placeholder="Choose a symbol for buy"
              />
            )
            :
            (
              <Typeahead
                  labelKey="fromUnofficialTokens"
                  multiple={false}
                  id="unofficialTokens"
                  options={this.state.useERC20AsSelectTo ? this.state.unofficialSymbols : this.state.unofficialSmartTokenSymbols}
                  onChange={(s) => this.setState({to: s[0]})}
                  placeholder="Choose a symbol for buy"
              />
            )
          }
          </React.Fragment>
        )
        :
        (null)
      }
      </React.Fragment>

      <br/>
      <Form.Control name="directionAmount" placeholder="Enter amount to send" onChange={e => this.change(e)} type="number" min="1"/>
      <br/>
      {
        this.state.amountReturn > 0
        ?
        ( <div>
          <Alert variant="primary">You will receive {this.state.amountReturn} {this.state.reciveSymbol}</Alert>
          {
            /*
            Additional info
            this.state.sendTo && this.state.sendFrom && this.state.directionAmount > 0 && this.props.MobXStorage.web3
            ?
            (<Alert variant="info">
            Etherscan: { <a href={EtherscanLink + "token/" + this.state.sendTo} target="_blank" rel="noopener noreferrer"> {this.state.to}</a> }
            &nbsp; Your balance of {this.state.from} {this.state.userBalanceFrom}
            </Alert>)
            :
            (null)
           */
          }
          {
            /*Buttons*/
            this.props.MobXStorage.web3
            ?
            (
              <ButtonGroup size="sm">
              {
                this.state.requireApprove
                ?
                (
                  <Button variant="outline-primary" onClick={() => this.wrapperApprove()}>Approve</Button>
                )
                :
                (null)
              }
              <Button variant="outline-primary" onClick={() => this.trade()}>Trade</Button>
              </ButtonGroup>
            )
            :
            (null)
          }
          </div>
        )
        :
        (null)
      }
      </Modal.Body>
    </Modal>
    </React.Fragment>
    )
  }
}

export default inject('MobXStorage')(observer(PoolModal))
