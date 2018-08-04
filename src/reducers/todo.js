const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((item, index, arr) => {
        if (item.id === action.id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    default:
      return state
  }
}

export default todo