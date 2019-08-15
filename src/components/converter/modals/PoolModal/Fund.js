import React, { Component } from 'react'
import { hexToNumberString, toWei, fromWei, isBN, BN } from 'web3-utils'

import {
  ABISmartToken,
  BNTToken,
  ABIBancorNetwork,
  BancorNetwork
} from '../../../../config'

import getWeb3ForRead from '../../../../service/getWeb3ForRead'
//import BigNumber from 'bignumber.js'
import { Button, Alert, Form, Card, ButtonGroup } from "react-bootstrap"

class Fund extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    BNTSendAmount:0,
    ConnectorSendAmount:0,
    SmartTokenAmount:0
    }
  }


  setRelayAndTokens = async (amount, isFromBNT) => {
  if(this.props.from && amount > 0){
  const tokenAmountInfo = await this.calculateRelayByTokenInput(amount, isFromBNT)
  console.log(tokenAmountInfo)
  if(isFromBNT){
    this.setState({
      BNTSendAmount:amount,
      SmartTokenAmount:fromWei(String(tokenAmountInfo[0])),
      ConnectorSendAmount:fromWei(String(tokenAmountInfo[1]))
    })
  }
  else{
    this.setState({
      BNTSendAmount:fromWei(String(tokenAmountInfo[1])),
      SmartTokenAmount:fromWei(String(tokenAmountInfo[0])),
      ConnectorSendAmount:amount
    })
  }
 }
 else{
   this.setState({
     BNTSendAmount:0,
     SmartTokenAmount:0,
     ConnectorSendAmount:0
   })
 }
}

  getRateWithCommision = async (path, amount) => {
    const web3 = getWeb3ForRead(this.props.web3)
    const bancorNetworkContract = web3.eth.Contract(ABIBancorNetwork, BancorNetwork)

    amount = isBN(amount) ? hexToNumberString(amount) : toWei(String(amount))

    let amountReturn = await bancorNetworkContract.methods.getReturnByPath(
      path,
      amount
    ).call()

    if(amountReturn){
      const returnAmount = new BN(hexToNumberString(amountReturn[0]._hex))
      const commision = new BN(hexToNumberString(amountReturn[1]._hex))
      amountReturn = returnAmount.add(commision)
    }else{
      amountReturn = 0
    }

    return amountReturn
  }

  // return smart token amount and second token amount by input BNT or connector
  calculateRelayByTokenInput = async (amount, isFromBNT) => {
    const info = this.props.getInfoBySymbol()
    // info[2] - token, info[3] - relay
    const path = isFromBNT ? [BNTToken, info[3], info[3]] : [info[2], info[3], info[3]]
    let relayPart = await this.getRateWithCommision(path, amount)
    console.log("Token:", info[2], "Converter:", info[1], "BNT:", BNTToken)
    relayPart = new BN(relayPart)
    const fullRelayAmount = relayPart.add(relayPart)
    // Calculate amount of dependent token by relay amount
    const pathSecond = isFromBNT ? [info[3], info[3], info[2]] : [info[3], info[3], BNTToken]
    const secondToken = await this.getRateWithCommision(pathSecond, relayPart)
    return[fullRelayAmount, secondToken]
  }

  // TEMPORARY SOLUTION UNTIL ISSUE WITH BATCHREQUEST
  approveBNT = async () => {
    const tokenInfo = this.props.getInfoBySymbol()
    const converterAddress = tokenInfo[1]
    console.log("converterAddress", converterAddress)

    const bnt = this.props.web3.eth.Contract(ABISmartToken, BNTToken)
    bnt.methods.approve(
    converterAddress,
    toWei(this.state.BNTSendAmount)
    ).send({from: this.props.accounts[0]})
  }

  approveConnector = async () => {
    const tokenInfo = this.props.getInfoBySymbol()
    const converterAddress = tokenInfo[1]
    const connectorAddress = tokenInfo[2]
    console.log("converterAddress", converterAddress, "connectorAddress", connectorAddress)
    const connector = this.props.web3.eth.Contract(ABISmartToken, connectorAddress)
    connector.methods.approve(
    converterAddress,
    toWei(this.state.ConnectorSendAmount)
    ).send({from: this.props.accounts[0]})
   }

  fund = () => {
    if(this.state.SmartTokenAmount > 0){
      const converter = this.props.getInfoBySymbol()[0]
      const info = this.props.getInfoBySymbol()
      const reciver = info[1]
      console.log(reciver)
      converter.methods.fund(
      toWei(this.state.SmartTokenAmount))
      .send({ from:this.props.accounts[0] }
      )
    }
    else {
      alert("Please input amount")
    }
  }

  render(){
    console.log(this.state.SmartTokenAmount)
    return(
    <React.Fragment>
    <Form.Control
    name="ConnectorSendAmount"
    placeholder="Enter connector amount"
    value={this.state.ConnectorSendAmount > 0 ? this.state.ConnectorSendAmount : 0}
    onChange={e => this.setRelayAndTokens(e.target.value, false)}
    type="number" min="1"/>
    <Form.Text className="text-muted">
      Enter connector amount
    </Form.Text>
    <br/>

    <Form.Control
    name="BNTSendAmount"
    placeholder="Enter BNT amount"
    value={this.state.BNTSendAmount > 0 ? this.state.BNTSendAmount : 0}
    onChange={e => this.setRelayAndTokens(e.target.value, true)}
    type="number" min="1"/>
    <Form.Text className="text-muted">
      Enter BNT amount
    </Form.Text>
    <br/>
    {/* Connectors info */}
    {
      this.state.ConnectorSendAmount > 0 && this.state.BNTSendAmount > 0
      ?
      (
        <Alert variant="info">
        You will pay: {this.props.from}: {this.state.ConnectorSendAmount}, BNT: {this.state.BNTSendAmount}, and receive {this.state.SmartTokenAmount} of relay
        </Alert>
      )
      :
      (null)
    }
    <br/>
    {
      this.props.from && this.props.web3 && this.state.SmartTokenAmount > 0
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
