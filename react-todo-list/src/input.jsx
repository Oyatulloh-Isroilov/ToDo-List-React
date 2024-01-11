import React, { useState } from "react";

const Input = ({ taskAdd }) => {
  const [task, setTask] = useState("");

  function handleInputVal(ev) {
    setTask(ev.target.value);
  }

  function handleTaskAdd(ev) {
    ev.preventDefault();
    if (task.trim() !== "") { 
      taskAdd(task);
      setTask(""); 
    }
  }

  return (
    <form className="InputForm" onSubmit={handleTaskAdd}>
      <input
        type="text"
        placeholder="Task add"
        value={task}
        onChange={handleInputVal}
      />
      <button>+</button>
    </form>
  );
};

export default Input;

