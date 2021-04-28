export const addTodo = (name) => {
    return {
      type: 'ADD_TODO',
      payload: { name } //contains id, name and completion
    }
  }
  
export const changeTodo = (id, name, checked) => {
    return {
      type: 'CHANGE_TODO',
      payload: {id, name, checked } //contains id, name and completion
    }
  }

export const changeFilter = filter_text => {
    return {
        type: 'SET_FILTER',
        payload: {filter_text}
    }
}