import React, { Component } from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleAddTodo from '../containers/VisibleAddTodo'
import Footer from './Footer'

export default class extends Component {
  render() {
    return (
      <div>
        <VisibleAddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}