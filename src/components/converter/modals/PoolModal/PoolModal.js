// THIS COMPONENT ALLOW USER CALL FUND AND LIQUIDATE FROM A CERTAIN CONVERTER
// TODO refactoring (Presentational and Container)
// TODO DRY

import React, { Component } from 'react'
import { Button, Form,  Modal, Badge } from "react-bootstrap"
import { inject, observer } from 'mobx-react'
import findByProps from '../../../../service/findByProps'
import getWeb3ForRead from '../../../../service/getWeb3ForRead'
import { ABIConverter, ABISmartToken } from '../../../../config'

import Liquidate from './Liquidate'
import Fund from './Fund'

import { Typeahead } from 'react-bootstrap-typeahead'

class PoolModal extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    from:undefined,
    ShowModal:false,
    bancorTokensStorageJson:null,
    selectFromOficial:true,
    officialSymbols:undefined,
    unofficialSymbols:undefined,
    selectAction:'Add liquidity'
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

  componentDidUpdate = async (prevProps, prevState) => {
    // Update state with tokens data
    if (prevProps.MobXStorage.bancorTokensStorageJson !== this.state.bancorTokensStorageJson) {
      const officialSymbols = this.props.MobXStorage.officialSymbols
      const unofficialSymbols = this.props.MobXStorage.unofficialSymbols
      const bancorTokensStorageJson = this.props.MobXStorage.bancorTokensStorageJson
      this.setState({
        officialSymbols,
        unofficialSymbols,
        bancorTokensStorageJson
      })
    }
  }

  // return converter contract, converter address, connector (ERC20) token address, smart token address and smart token contract
  getInfoBySymbol = () => {
    if(this.state.from && this.state.bancorTokensStorageJson){
      const web3 = getWeb3ForRead(this.props.MobXStorage.web3)
      const tokenInfo = findByProps(this.state.bancorTokensStorageJson, 'symbol', this.state.from)[0]
      return [
        web3.eth.Contract(ABIConverter, tokenInfo.converterAddress),
        tokenInfo.converterAddress,
        tokenInfo.tokenAddress,
        tokenInfo.smartToken,
        web3.eth.Contract(ABISmartToken, tokenInfo.smartTokenAddress)
      ]
    }
  }


  // reset states after close modal
  closeModal = () => this.setState({
    to:undefined,
    from:undefined,
    directionAmount:0,
    ShowModal:false,
    bancorTokensStorageJson:null,
    selectToOficial:true,
    selectFromOficial:true,
    officialSymbols:undefined,
    unofficialSymbols:undefined
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
        <small>Pool</small>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <React.Fragment>
        {
          this.state.officialSymbols && this.state.unofficialSymbols
          ?
          (
            <React.Fragment>
            <Form.Group>
            <Form.Label>Action</Form.Label>
            <Form.Control as="select" size="sm" name="selectAction" onChange={e => this.change(e)}>
            <option>Add liquidity</option>
            <option>Remove liquidity</option>
            </Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Check
            name="selectFromOficial"
            type="checkbox"
            label="Show unofficial"
            onChange={e => this.change(e)}
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
                    options={this.state.officialSymbols}
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
                    options={this.state.unofficialSymbols}
                    onChange={(s) => this.setState({from: s[0]})}
                    placeholder="Choose a symbol for send"
                />
              )
            }

            <br/>
            {
              this.state.selectAction === "Add liquidity"
              ?
              (
                <Fund
                from={this.state.from}
                web3={this.props.MobXStorage.web3}
                getInfoBySymbol={this.getInfoBySymbol}
                accounts={this.props.MobXStorage.accounts}
                />
              )
              :
              (
                <Liquidate getInfoBySymbol={this.getInfoBySymbol} accounts={this.props.MobXStorage.accounts}/>
              )
            }
            </React.Fragment>
         )

         :(<p>Loading data</p>)
       }
       </React.Fragment>
       </Modal.Body>
      </Modal>
      </React.Fragment>
      )
    }
}

export default inject('MobXStorage')(observer(PoolModal))
