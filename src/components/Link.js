import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { children, active, handleClick } = this.props
    return (
      <button disabled={active} onClick={handleClick}>{children}</button>
    )
  }
}