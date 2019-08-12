import React, { Component } from 'react'

class Liquidate extends Component {

  liquidate = () => {
    if(this.state.directionAmount > 0){
      const converter = this.getInfoBySymbol()[0]
      converter.methods.liquidate(toWei(String(this.state.directionAmount))).send({ from:this.props.MobXStorage.accounts[0] })
    }
    else {
      alert("Please input amount")
    }
  }


  render() {
    return (
      <React.Fragment>
      <Button variant="outline-primary" size="sm" onClick={() => this.liquidate()}>Liguidate</Button>
      </React.Fragment>
    )
  }

}

export default Liquidate
