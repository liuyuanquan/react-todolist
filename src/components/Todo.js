import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { todo, onClick } = this.props
    return (
      <li data-id={todo.id} data-completed={todo.completed} onClick={onClick} style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>{todo.text}</li>
    )
  }
}