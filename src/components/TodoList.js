import React, { Component } from 'react'
import Todo from './Todo'

export default class extends Component {
  render() {
    const { list, handleClick } = this.props 
    return (
      <ul>
        {
          list.map((item, index, arr) => <Todo key={index} todo={item} onClick={handleClick.bind(this, item.id)}/>)
        }
      </ul>
    )
  }
}