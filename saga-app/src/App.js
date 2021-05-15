import React, { Component } from "react";
import {connect} from "react-redux";

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.bal}</h4>
        <button onClick={this.props.withdraw}>Withdraw</button>
      </React.Fragment>
    )
  }
}

const receive = (state) => {
  console.log(state.bal)
  return {
    
    bal: state.bal
  }
}

const send = (dispatch) => {
  return {
    withdraw: () => { dispatch({ type: "WITHDRAW", value: 1000 }) }
  }
}

export default connect(receive,send)(App);