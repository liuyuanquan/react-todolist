import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor(props, context) {
    super(props)
    const { store } = context
    store.subscribe(() => {
      console.log('next  state:', store.getState())
    })
  } 
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