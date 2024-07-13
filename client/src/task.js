// task.js

import React, { useState } from 'react';

export const Task = ({ taskname, id, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskname);

  const handleUpdate = () => {
    updateTask(id, newTaskName);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{taskname}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </>
      )}
    </div>
  );
};
