import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Todo, Store } from "../store/types";
import { toggleTodo, updateTodo, deleteTodo } from "../store/actions";

function TodoListItems() {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            onClick={() => {
              dispatch(toggleTodo(todo.id));
            }}
            checked={todo.done}
          />
          <input
            value={todo.text}
            onChange={(evt) => {
              dispatch(updateTodo(todo.id, evt.target.value));
            }}
          />
          <button
            onClick={() => {
              dispatch(deleteTodo(todo.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <TodoListItems />
    </>
  );
}

export default TodoList;
