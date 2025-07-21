import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setList([...list, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2>To-Do List</h2>
      
      <form className="mb-3 d-flex gap-2" onSubmit={handleAdd}>
        <input 
          type="text" 
          className="form-control" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a task"
        />
        <button className="btn btn-primary">Add</button>
      </form>

      <ul className="list-group">
        {list.map((t, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {t}
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
