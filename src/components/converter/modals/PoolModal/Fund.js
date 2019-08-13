import React, { Component } from 'react'
import { hexToNumberString, toWei, fromWei } from 'web3-utils'
import { ABISmartToken, BNTToken } from '../../../../config'
import getPath from '../../../../service/getPath'
import BigNumber from 'bignumber.js'
import { Button, Alert, Form, Card, ButtonGroup } from "react-bootstrap"

class Fund extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    directionAmount:0,
    connectorAmount:undefined,
    BNTAmount:undefined,
    BNTSendAmount:0,
    ConnectorSendAmount:0
    }
  }

  // helper for setState
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidUpdate = async (prevProps, prevState) => {
    // Update connctors info
    if(prevProps.from !== this.props.from || prevState.directionAmount !== this.state.directionAmount){
      if(this.props.from)
        if(this.state.directionAmount > 0){
          const connectorsInfo = await this.calculateConnectorBySmartTokenAmount()
          console.log(connectorsInfo[0], connectorsInfo[1])
          const BNTAmount = connectorsInfo[0]
          const connectorAmount = connectorsInfo[1]
          console.log(connectorAmount)
          this.setState({ BNTAmount, connectorAmount })
        }else{
          this.setState({ BNTAmount:0, connectorAmount:0 })
      }
    }
  }


  // calculateRelayByTokenInput = async () => {
  //   const info = this.getInfoBySymbol()
  //   //getPath
  //  // partRelay = geRalayByInput(userInputInBNT)
  //  // Cot = getCOTByRalayRate(partRelay)
  //  // secondPart = geRalayByInput(Cot)
  //  // result = partRelay + secondPart
  //  // return calculateConnectorBySmartTokenAmount(result)
  // }

  // return BNT and ERC20 connectors amount calculated by smart token amount
  calculateConnectorBySmartTokenAmount = async () => {
    const amount = toWei(String(this.state.directionAmount))
    const converterInfo = this.props.getInfoBySymbol()
    const token = converterInfo[4]
    const converter = converterInfo[0]
    const connectorCount = await converter.methods.connectorTokenCount().call()

    let supply = await token.methods.totalSupply().call()
    supply = hexToNumberString(supply._hex)

    let connectorsAmount = []
    let connectorAmount
    let connectorToken
    let connectorBalance

    for(let i = 0; i < connectorCount; i++){
      connectorToken = await converter.methods.connectorTokens(i).call()
      connectorBalance = await converter.methods.getConnectorBalance(connectorToken).call()
      connectorBalance = hexToNumberString(connectorBalance._hex)
      // Bancor calculation
      // _amount.mul(connectorBalance).div(supply);
      let bigAmount = new BigNumber(amount)
      let bigConnectorBalance = new BigNumber(connectorBalance)
      let bigSupply = new BigNumber(supply)
      connectorAmount = bigAmount.multipliedBy(bigConnectorBalance).dividedBy(bigSupply).toFixed(0)

      connectorsAmount.push(connectorAmount)
    }

    return connectorsAmount
  }

  // TEMPORARY SOLUTION UNTIL ISSUE WITH BATCHREQUEST
  approveBNT = async () => {
    const tokenInfo = this.props.getInfoBySymbol()
    const converterAddress = tokenInfo[1]
    console.log("converterAddress", converterAddress)

    const bnt = this.props.web3.eth.Contract(ABISmartToken, BNTToken)
    bnt.methods.approve(
    converterAddress,
    this.state.BNTAmount
    ).send({from: this.props.accounts[0]})
  }

  approveConnector = async () => {
    const tokenInfo = this.props.getInfoBySymbol()
    const converterAddress = tokenInfo[1]
    const connectorAddress = tokenInfo[2]
    const connector = this.props.web3.eth.Contract(ABISmartToken, connectorAddress)
    connector.methods.approve(
    converterAddress,
    this.state.connectorAmount
    ).send({from: this.props.accounts[0]})
   }

  fund = () => {
    if(this.state.directionAmount > 0){
      const converter = this.props.getInfoBySymbol()[0]
      const info = this.props.getInfoBySymbol()
      const reciver = info[1]
      console.log(reciver)
      converter.methods.fund(toWei(String(this.state.directionAmount))).send({ from:this.props.accounts[0] })
    }
    else {
      alert("Please input amount")
    }
  }

  render(){
    return(
    <React.Fragment>
    <Form.Control name="directionAmount" placeholder="Enter relay amount to recive" onChange={e => this.change(e)} type="number" min="1"/>
    <br/>
    <Form.Control name="BNTSendAmount" placeholder="Enter BNT amount" onChange={e => this.change(e)} type="number" min="1"/>
    <br/>
    {/* Connectors info */}
    {
      this.state.BNTAmount && this.state.connectorAmount
      ?
      (
        <Alert variant="info">
        You will pay BNT: &nbsp; {fromWei(this.state.BNTAmount)}, &nbsp; {this.state.from}: &nbsp; {fromWei(this.state.connectorAmount)}
        </Alert>
      )
      :
      (null)
    }
    <br/>
    {
      this.state.from && this.props.web3 && this.state.BNTAmount
      ?
      (
        <Card className="text-center">
        <Card.Body>
        <ButtonGroup>
        <Button variant="outline-info" size="sm" onClick={() => this.approveBNT()}>Step 1: Approve BNT</Button>
        <Button variant="outline-info" size="sm" onClick={() => this.approveConnector()}>Step 2: Approve connector</Button>
        <Button variant="outline-info" size="sm" onClick={() => this.fund()}>Step 3: Fund</Button>
        </ButtonGroup>
        <Card.Text><small>Please do not press fund button untill step 1 and 2 will be confirmed</small></Card.Text>
        </Card.Body>
        </Card>
      )
      :
      (null)
    }
    </React.Fragment>
    )
  }
}

export default Fund
