import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  componentDidMount() {
    this.textInput.current.focus()
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit.bind(this, this.textInput)}>
          <input type='text' ref={this.textInput}/>
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}