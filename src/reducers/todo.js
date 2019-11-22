export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload.todo]
      };
    default:
      return state;
  }
};
