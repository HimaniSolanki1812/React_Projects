import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // Add or Update
  function handleAddOrUpdate() {
    if (task === "") return;

    if (editIndex === -1) {
      // ADD
      setList([...list, task]);
    } else {
      // UPDATE
      const newList = list.map((item, index) =>
        index === editIndex ? task : item
      );
      setList(newList);
      setEditIndex(-1);
    }
    setTask("");
  }

  // Remove
  function handleRemove(index) {
    setList(list.filter((_, i) => i !== index));
  }

  // Edit
  function handleEdit(index) {
    setTask(list[index]);
    setEditIndex(index);
  }

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddOrUpdate}>
        {editIndex === -1 ? "Add" : "Update Task"}
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}<br/><br/>
            <button onClick={() => handleEdit(index)}>Edit task</button><br/><br/>
            <button onClick={() => handleRemove(index)}>Delete task</button> <br/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
