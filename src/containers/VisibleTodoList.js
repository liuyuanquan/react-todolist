import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
  const { filter } = state
  return {
    list: state.todo.filter((todo, index, arr) => {
      if (filter === 'SHOW_ALL') {
        return true
      } else if (filter === 'SHOW_ACTIVE') {
        return !todo.completed
      } else if (filter === 'SHOW_COMPLETED') {
        return todo.completed
      } else {
        return false
      }
    })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: (id, event) => {
    dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)