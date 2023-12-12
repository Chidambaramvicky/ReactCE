import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        <h1>I am Playing {this.props.sport}</h1>
      </div>
    )
  }
}
