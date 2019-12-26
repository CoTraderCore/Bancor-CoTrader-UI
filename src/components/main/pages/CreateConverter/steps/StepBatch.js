import {
  ABIConverter,
  ABISmartToken,
  USDBToken,
  BNTToken,
  BancorRegistryABI,
  BancorRegistryAddress

} from '../../../../../config'
import React, { Component } from 'react'
import { fromWei } from 'web3-utils'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


class StepBatch extends Component {
 constructor(props, context) {
  super(props, context);
   this.state = {
   fee:1000
   }
 }

 // helper
 getTxObject = (from, to, data, gasPrice, gas) => {
   return {
     from,
     to,
     "value": "0x0",
     data,
     gasPrice,
     gas,
   }
 }

 execudeBatch = async () => {
   const web3 = this.props.MobXStorage.web3
   const converterHash = window.localStorage.getItem('txConverter')
   const converterInfo = await web3.eth.getTransactionReceipt(converterHash)
   const smartTokenHash = window.localStorage.getItem('txSmartToken')
   const smartTokenInfo = await web3.eth.getTransactionReceipt(smartTokenHash)
   const smartToken = new web3.eth.Contract(ABISmartToken, smartTokenInfo.contractAddress)
   const converter = new web3.eth.Contract(ABIConverter, converterInfo.contractAddress)
   const smartTokenAddress = smartTokenInfo.contractAddress
   const converterAddress = converterInfo.contractAddress

  if(converterInfo && smartTokenInfo){
     const connectorType = window.localStorage.getItem('connectorType')
     let bancorConncectorAddress
     if(connectorType === "USDB" || connectorType === "BNT")
        bancorConncectorAddress = connectorType === "USDB" ? USDBToken : BNTToken
     const bancorConnectorContract = new web3.eth.Contract(ABISmartToken,  bancorConncectorAddress)
     let issueBalance = await bancorConnectorContract.methods.balanceOf(converterAddress).call()

     if(fromWei(String(issueBalance)) > 0){

        const gasPrice = this.props.MobXStorage.GasPrice
        const gas = 1872732

        let batch = new web3.BatchRequest()

        // addReserve tx 1 (step 3)
        const addReserveData = converter.methods.addReserve(
          window.localStorage.getItem('userToken'), 500000)
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 3: ", window.localStorage.getItem('userToken'), 500000)

        // setConversionFee tx 2 (step 4)
        const setConversionFeeData = converter.methods.setConversionFee(this.state.fee)
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 4: ", this.state.fee)

        // get data for tx 3
        const issueBalanceDouble = issueBalance.mul(2)

        // issue tx 3 (step 5)
        const issueData = smartToken.methods.issue(this.props.MobXStorage.accounts[0], issueBalanceDouble)
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 5:", this.props.MobXStorage.accounts[0], issueBalanceDouble)

        // transferOwnership tx 4 (step 6)
        const transferOwnershipData = smartToken.methods.transferOwnership(converterAddress)
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 6:", converterAddress)

        // acceptTokenOwnership tx 5 (step 7)
        const acceptTokenOwnershipData = converter.methods.acceptTokenOwnership()
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 7 (no need params)")

        // add to registry tx 6 (step 8)
        const registry = new web3.eth.Contract(BancorRegistryABI, BancorRegistryAddress)
        const addConverterData = registry.methods.addConverter(converterAddress)
        .encodeABI({from: this.props.MobXStorage.accounts[0]})
        console.log("PARAMS step 8", converterAddress)

        const txOne = this.getTxObject(this.props.MobXStorage.accounts[0], converterAddress, addReserveData, gasPrice, gas)
        const txTwo = this.getTxObject(this.props.MobXStorage.accounts[0], converterAddress, setConversionFeeData, gasPrice, gas)
        const txThree = this.getTxObject(this.props.MobXStorage.accounts[0], smartTokenAddress, issueData, gasPrice, gas)
        const txFour = this.getTxObject(this.props.MobXStorage.accounts[0], smartTokenAddress, transferOwnershipData, gasPrice, gas)
        const txFive = this.getTxObject(this.props.MobXStorage.accounts[0], converterAddress, acceptTokenOwnershipData, gasPrice, gas)
        const txSix = this.getTxObject(this.props.MobXStorage.accounts[0], BancorRegistryAddress, addConverterData, gasPrice, gas)


        batch.add(web3.eth.sendTransaction.request(txOne, () => console.log("tx 1")))
        batch.add(web3.eth.sendTransaction.request(txTwo, () => console.log("tx 2")))
        batch.add(web3.eth.sendTransaction.request(txThree, () => console.log("tx 3")))
        batch.add(web3.eth.sendTransaction.request(txFour, () => console.log("tx 4")))
        batch.add(web3.eth.sendTransaction.request(txFive, () => console.log("tx 5")))
        batch.add(web3.eth.sendTransaction.request(txSix, () => console.log("tx 6")))
        batch.execute()
   }
   else{
        alert('Please deposit both tokens to converter')
     }
   }
   else{
       alert("Converter contract not deployed yet, please wait")
   }
 }


 render() {
   return(
    <Card style={{backgroundColor:'rgba(255,255,255,0.1)'}}>
    <CardContent>
    <Typography variant="h4" gutterBottom component="h4">
    Batch step
    </Typography>
    <Typography variant="body1" className={'mb-2'} component="p">
    <strong>Batch steps</strong>
    </Typography>
    <Typography className={'mt-2 mb-2'} component="div">
    <hr/>
    <Button variant="contained" color="primary" size="medium" onClick={() => this.execudeBatch()}>add reserve</Button>
    </Typography>
    </CardContent>
  </Card>
  )
}
}

export default StepBatch
