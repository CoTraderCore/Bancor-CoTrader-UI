import React, { Component } from 'react'
import { ListGroup, Modal, Button, Form } from "react-bootstrap"


class SelectModal extends Component {
  state = {
    listCurrent:null,
    listOriginal:null,
    Show:false
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.tokensList !== this.props.tokensList){
      this.setState({ listCurrent:this.props.tokensList, listOriginal:this.props.tokensList })
    }
  }

  filterList(value){
    if(value.length > 0){
      const newList = this.state.listOriginal.filter(token => token.symbol.includes(value))
      this.setState({ listCurrent:newList })
    }
    else{
      this.setState({ listCurrent:this.state.listOriginal })
    }

  }


  render() {
    return (
      <React.Fragment>
      {
        this.state.listCurrent
        ?
        (
          <React.Fragment>
          <Button onClick={() => this.setState({Show:true})}>New select test</Button>
          <Modal
          size="lg"
          show={this.state.Show}
          onHide={() => this.setState({Show:false})}
          >
          <Modal.Header closeButton>
          </Modal.Header>
          <Form>
          <Form.Group>
          <Form.Control type="string" placeholder="Input token name" onChange={(e) => this.filterList(e.target.value)}/>
          </Form.Group>
          </Form>
          <ListGroup
          as="ul"
          style={{
            maxHeight: "300px",
            marginBottom: "10px",
            overflow:"scroll",
            overflowX:"hidden"
          }}
          >
          {this.state.listCurrent.map((value, key) => {
            return(
            <ListGroup.Item
            value={value.symbol}
            key={key}
            onClick={() => alert(value.symbol)}>
            <img src="./test.jpg" alt="Img" width="29" height="25"/> {value.symbol}  <small>amount: {value.amount}</small>
            </ListGroup.Item>
          )
          })}
          </ListGroup>
          </Modal>
          </React.Fragment>
        )
        :
        (null)
      }
      </React.Fragment>
    )
  }

}

export default SelectModal
