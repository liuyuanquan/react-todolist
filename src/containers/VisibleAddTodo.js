import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'

let nextTodoId = 0

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (textInput, event) => {
    const { current: input } = textInput
    event.preventDefault()
    if (input.value === '') {
      input.focus()
    } else {
      dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
      input.value = ''
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)