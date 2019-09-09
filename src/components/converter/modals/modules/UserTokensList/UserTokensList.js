import React, { Component } from 'react'
import axios from 'axios'
import { netId } from '../../../../../config'
import SelectModal from './SelectModal'


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
    try{
      const res = await axios({
      method:'get',
      url: `https://web3api.io/api/v1/addresses/${this.props.address}/tokens`,
      headers: { 'x-api-key': process.env.REACT_APP_AMBERDATA_TOKEN }
      })
      this.setState({ tokensList:res.data.payload.records})
    }catch(e){
      console.log("Can't get tokens list")
    }

  }

  render() {
    return (
      <SelectModal tokensList={this.state.tokensList}/>
    )
  }

}

export default UserTokensList
