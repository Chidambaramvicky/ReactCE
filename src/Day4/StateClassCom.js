import React, { Component } from 'react'

export default class StateClassCom extends Component {
    state={
        color:"blue",
        price:17
    }
    handleChange=()=>{this.setState({color:"red"})}
  render() {
    return (
      <div>
        <h1>The color is {this.state.color} and price is {this.state.price}</h1>
        <button onClick={this.handleChange}>Click me</button>
      </div>
    )
  }
}
