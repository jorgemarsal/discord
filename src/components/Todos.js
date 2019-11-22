import React from "react";
import { addTodo, addTodoAsync } from "../actions/todo";
import { connect } from "react-redux";

export function Todo({ todos, addTodo, addTodoAsync }) {
  return (
    <>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          addTodo("todo");
          // addTodoAsync("todo");
        }}
      >
        Add
      </button>
    </>
  );
}

const mapStateToProps = state => ({ todos: state.todo.todos });

export default connect(mapStateToProps, {
  addTodo,
  addTodoAsync
})(Todo);
