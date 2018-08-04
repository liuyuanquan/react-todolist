import React, { Component } from 'react'
import VisibleLink from '../containers/VisibleLink'

export default class extends Component {
  render() {
    return (
      <div>
        Show: 
        <VisibleLink filter='SHOW_ALL'>All</VisibleLink>
        <VisibleLink filter='SHOW_ACTIVE'>Active</VisibleLink>
        <VisibleLink filter='SHOW_COMPLETED'>Completed</VisibleLink>
      </div>
    )
  }
}