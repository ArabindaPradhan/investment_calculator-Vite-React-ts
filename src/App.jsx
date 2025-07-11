import Header from "./components/header";
import Input from "./components/input";
import Result from "./components/result";
import Counter from "./counter";
import TodoList from "./todoList";

import { useState } from "react";
function App() {
  const [result, setResult] = useState([]);
  const getResult = (res) => {
    console.log("input res", res);
    setResult(res);
  };
  return (
    <>
      <Header />
      <Input getResult={getResult} />
      <Result showResult={result} />
      {/* <Counter /> */}
      {/* <TodoList /> */}
    </>
  );
}

export default App;
