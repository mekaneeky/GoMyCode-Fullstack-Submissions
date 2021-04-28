import { ADD_TODO, CHANGE_TODO, SET_FILTER } from "./actionTypes";

const initialState = {
  tasks: [
      { id: 0,
      name: "Start Adding Tasks",
      checked: false
  }],
  filter_text: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      console.log("more logging")
      console.log(state)
      const { name  } = action.payload;
      console.log(name)

      const id = state.tasks.length
      const checked = false;
      
      console.log(id)
      return {
        ...state,
        tasks: [
            ...state.tasks,
            {
                id: id,
                name: name,
                checked: checked
            }
        ]
        }
      };
    
    case CHANGE_TODO: {
      const { id, name, checked } = action.payload;
      
      let new_tasks = [];
      for (let idx in state.tasks) {
        if (idx != id) {
        new_tasks.push(state.tasks[idx])
        } else {
          new_tasks.push({id: id,
            name: name,
            checked: checked})
        }
    }
      
      return {
          ...state,
          tasks: new_tasks
      }
    }
    
    case SET_FILTER: {
        const {filter_text} = action.payload
        return {
            ...state,
            filter_text: filter_text
        };
    }
    default:
      return state;
  }
}
