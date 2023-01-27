import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Store } from "../store/types";
import { setNewTodo, addTodo } from "../store/actions";

function TodoAdd() {
  const text = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={text}
        onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
        placeholder="New todo"
      />
      <button
        onClick={() => {
          dispatch(addTodo());
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoAdd;
