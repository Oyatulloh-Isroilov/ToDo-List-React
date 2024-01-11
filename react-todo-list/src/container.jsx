import React, { useState } from "react";
import Input from "./input";

// taskItem komponentini yaratamiz
const TaskItem = ({ item }) => {
  return <li>{item.taskName}</li>;
};

function Container() {
  const [toDoList, setToDoList] = useState([]);

  const taskAdd = (taskName) => {
    const taskNew = { taskName, checked: false };
    setToDoList([...toDoList, taskNew]);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Input taskAdd={taskAdd} />
      <div className="list">
        <span>To Do</span>
        <ul className="listItems">
          {toDoList.map((items, index) => (
            <TaskItem key={index} item={items}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Container;
