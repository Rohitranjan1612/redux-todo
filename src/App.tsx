import * as React from "react";
import { Provider } from "react-redux";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

import store from "./store/store";

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <TodoAdd />
    </Provider>
  );
}

export default App;
