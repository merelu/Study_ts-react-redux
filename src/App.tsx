import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <>
      <CounterContainer />
      <TodoApp />
    </>
  );
}

export default App;
