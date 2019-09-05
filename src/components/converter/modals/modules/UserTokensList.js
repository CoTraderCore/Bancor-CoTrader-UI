import React, { Component } from 'react'
import axios from 'axios'
import { netId } from '../../../../config'

class UserTokensList extends Component {
  state = {
    tokensList:null
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
      <React.Fragment>
      {
        this.state.tokensList
        ?
        (
          this.state.tokensList.map((item, key) => <p key={key}>{item.symbol} {item.amount}</p>)
        )
        :
        (null)
      }
      </React.Fragment>
    )
  }

}

export default UserTokensList
