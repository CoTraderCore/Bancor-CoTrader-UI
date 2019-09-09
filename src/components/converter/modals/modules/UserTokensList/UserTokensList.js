import React, { Component } from 'react'
import axios from 'axios'
import { netId } from '../../../../../config'
import SelectModal from './SelectModal'
import { inject, observer } from 'mobx-react'

class UserTokensList extends Component {
  state = {
    tokensList:null,
    Show:false
  }

  componentWillMount() {
    if(netId === 1)
    this.getData()
  }

  getData = async () => {
    // Try get data for user balance 
    try{
      const res = await axios({
      method:'get',
      url: `https://web3api.io/api/v1/addresses/${this.props.address}/tokens`,
      headers: { 'x-api-key': process.env.REACT_APP_AMBERDATA_TOKEN }
      })

      const symbols = res.data.payload.records.map(item => item.symbol)
      const data = res.data.payload.records
      let amount = "0"

      const tokensList = this.props.MobXStorage.bancorTokensStorageJson.map((token) => {
        if(symbols.includes(token.symbol)){
          amount = data.filter(d => d.symbol.includes(token.symbol))[0].amount
          return { ...token, amount}
        }
        else{
          return { ...token, amount }
        }
       })

      this.setState({ tokensList })
    }
    // Just set data without user balance info
    catch(e){
      const tokensList = this.props.MobXStorage.bancorTokensStorageJson
      this.setState({ tokensList })
    }

  }

  render() {
    return (
      <SelectModal tokensList={this.state.tokensList}/>
    )
  }

}

export default inject('MobXStorage')(observer(UserTokensList))
