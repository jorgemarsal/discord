export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: {
    todo
  }
});

export const addTodoAsync = todo => async dispatch => {
  await Promise.resolve();
  dispatch({
    type: "ADD_TODO",
    payload: {
      todo
    }
  });
};
