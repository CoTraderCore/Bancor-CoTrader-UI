import React, { Component } from 'react'
import { Card, Badge } from "react-bootstrap"

import {
  hexToNumberString,
  //toWei,
  fromWei
} from 'web3-utils'

import {
  ABISmartToken,
  EtherscanLink,
  //ABIBancorFormula,
  //BancorFormula,
  //ABIConverter
} from '../../../../config'

import getDirectionData from '../../../../service/getDirectionData'
//import findByProps from '../../../../service/findByProps'

class DirectionInfo extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    sendFrom:undefined,
    sendTo:undefined,
    userBalanceFrom:undefined,
    balanceOfTo:undefined,
    saleReturnFrom:undefined,
    saleReturnTo:undefined
  }
  }

  componentDidUpdate(prevProps, prevState){
    // Update rate by onChange
    if(prevProps.from !== this.props.from || prevProps.to !== this.props.to || prevProps.directionAmount !== this.props.directionAmount){
      this.setTokensData()
    }
  }

  // calculateSaleReturn = async (web3, tokenSymbol, objProps, sellAmount) => {
  //   // get tokens info object by token symbol
  //   const tokenInfo = findByProps(this.props.bancorTokensStorageJson, objProps, tokenSymbol)[0]
  //   // create contracts instance
  //   const bancorFormula = web3.eth.Contract(ABIBancorFormula, BancorFormula)
  //   const token = web3.eth.Contract(ABISmartToken, tokenInfo.tokenAddress)
  //   const converter = web3.eth.Contract(ABIConverter, tokenInfo.converterAddress)
  //   // variables for parameters
  //   let totalSupply = await token.methods.totalSupply().call()
  //   totalSupply = hexToNumberString(totalSupply._hex)
  //   let connectorBalance = await converter.methods.getConnectorBalance(tokenInfo.tokenAddress).call()
  //   connectorBalance = hexToNumberString(connectorBalance._hex)
  //   const connectorStruct = await converter.methods.connectors(tokenInfo.tokenAddress).call()
  //   const connectorWeight = connectorStruct.weight
  //   // formula.calculateSaleReturn(tokenSupply, connectorBalance, connector.weight, _sellAmount)
  //   let result = await bancorFormula.methods.calculateSaleReturn(totalSupply, connectorBalance, connectorWeight, sellAmount).call()
  //   result = hexToNumberString(result._hex)
  //   return result
  //
  // }

  getUserBalance = async (web3, sendFrom, sendTo) => {
    let userBalanceFrom
    let token
    let tokenTo
    let balanceOfTo
    if(this.props.from !== "ETH"){
      token = web3.eth.Contract(ABISmartToken, sendFrom)
      userBalanceFrom = await token.methods.balanceOf(this.props.accounts[0]).call()
      userBalanceFrom = fromWei(hexToNumberString(userBalanceFrom._hex))
      tokenTo = web3.eth.Contract(ABISmartToken, sendTo)
      balanceOfTo = await tokenTo.methods.balanceOf(this.props.accounts[0]).call()
      balanceOfTo = fromWei(hexToNumberString(balanceOfTo._hex))
    }else{
      userBalanceFrom = await web3.eth.getBalance((this.props.accounts[0]))
      userBalanceFrom = fromWei(String(userBalanceFrom))
    }

    return { userBalanceFrom, balanceOfTo }
  }


  // calculateCurent = async (web3, objProps, tokenSymbol, amount) => {
  //   console.log("amount", amount)
  //   // get tokens info object by token symbol
  //   const tokenInfo = findByProps(this.props.bancorTokensStorageJson, objProps, tokenSymbol)[0]
  //
  //   const token = web3.eth.Contract(ABISmartToken, tokenInfo.tokenAddress)
  //   const smartToken = web3.eth.Contract(ABISmartToken, tokenInfo.smartTokenAddress)
  //   const converter = web3.eth.Contract(ABIConverter, tokenInfo.converterAddress)
  //
  //   let smartTokenTotalSupply = await smartToken.methods.totalSupply().call()
  //   smartTokenTotalSupply = hexToNumberString(smartTokenTotalSupply._hex)
  //   console.log("smartTokenTotalSupply", smartTokenTotalSupply)
  //
  //   const smartTokenTotalValue = fromWei(String(smartTokenTotalSupply)) * amount
  //   console.log(smartTokenTotalValue)
  //
  //   let connectorBalance = await converter.methods.getConnectorBalance(tokenInfo.tokenAddress).call()
  //   connectorBalance = hexToNumberString(connectorBalance._hex)
  //   connectorBalance = fromWei(String(connectorBalance))
  //
  //   console.log("connectorBalance", connectorBalance)
  //
  //   const CW = connectorBalance / smartTokenTotalValue
  //
  //   console.log("CW", CW)
  // }

  // set state addreses to and from and user balance from
  setTokensData = async () => {
    if(this.props.to && this.props.from && this.props.web3 && this.props.accounts){
      const web3 = this.props.web3
      const {
        sendFrom,
        sendTo,
        //objPropsFrom,
        //objPropsTo
        } = getDirectionData(
        this.props.from,
        this.props.to,
        this.props.bancorTokensStorageJson,
        this.props.useERC20AsSelectFrom,
        this.props.useERC20AsSelectTo
      )

      const { userBalanceFrom, balanceOfTo } = await this.getUserBalance(web3, sendFrom, sendTo)
      let saleReturnFrom
      let saleReturnTo

      // if (this.props.amountReturn){
      //   this.calculateCurent(web3, objPropsFrom, this.props.from, this.props.amountReturn)
      // }
      // if(this.props.directionAmount > 0){
      //   saleReturnFrom = await this.calculateSaleReturn(web3, this.props.from, objPropsFrom, toWei(String(this.props.directionAmount)))
      //   saleReturnTo = await this.calculateSaleReturn(web3, this.props.to, objPropsTo, toWei(String(this.props.directionAmount)))
      // }


      this.setState({ sendFrom, sendTo, userBalanceFrom, balanceOfTo, saleReturnFrom, saleReturnTo })
    }
  }

  render(){
   return(
    <React.Fragment>
    {
      /*Token info*/
      this.state.sendTo && this.state.sendFrom && this.props.directionAmount > 0
      ?
      (
      <Card className="text-center">
      <Card.Text><Badge variant="primary">Additional info</Badge></Card.Text>
      <Badge variant="Light">
      Etherscan: { <a href={EtherscanLink + "token/" + this.state.sendTo} target="_blank" rel="noopener noreferrer"> {this.props.to}</a> }
      </Badge>
      <Badge variant="Light">
      Your balance of {this.props.from} {this.state.userBalanceFrom}
      </Badge>
      <Badge variant="Light">
      Your balance of {this.props.to}: &nbsp; {this.state.balanceOfTo}
      </Badge>
      {
        this.state.saleReturnFrom && this.state.saleReturnTo
        ?
        (
          <React.Fragment>
          <Badge variant="Light">
          <p style={{color:"red"}}>Sale return {this.props.from}: {this.state.saleReturnFrom } </p>
          </Badge>
          <Badge variant="Light">
          <p style={{color:"red"}}> Sale return {this.props.to}: {this.state.saleReturnTo } </p>
          </Badge>
          </React.Fragment>
        )
        :
        (null)
      }
      </Card>
      )
      :
      (null)
    }
    </React.Fragment>
   )
  }
}

export default DirectionInfo
