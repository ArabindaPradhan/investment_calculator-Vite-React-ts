import React from "react";

const todoList = () => {
  const [list, setList] = React.useState([]);

  let data = document.getElementById("inp");
  const addTodo = () => {
    setList(list.concat(data.value));

    data.value = "";
  };
  const removeTodo = (index) => {
    setList(list.filter((val, i) => i !== index));
  };
  return (
    <>
      <input type="text" name="" id="inp" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default todoList;
