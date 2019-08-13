import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap"
import { toWei } from 'web3-utils'

class Liquidate extends Component {
  state = {
    directionAmount:0
  }

  liquidate = () => {
    if(this.state.directionAmount > 0){
      const converter = this.props.getInfoBySymbol()[0]
      converter.methods.liquidate(toWei(String(this.state.directionAmount))).send({ from:this.props.accounts[0] })
    }
    else {
      alert("Please input amount")
    }
  }


  render() {
    console.log(this.state.directionAmount)
    return (
      <React.Fragment>
      <Form.Group>
      <Form.Control name="directionAmount" placeholder="Enter relay amount to liguidate" onChange={e => this.setState({directionAmount:e.target.value})} type="number" min="1"/>
      <br/>
      <Button variant="outline-primary" size="sm" onClick={() => this.liquidate()}>Liguidate</Button>
      </Form.Group>
      </React.Fragment>
    )
  }

}

export default Liquidate
