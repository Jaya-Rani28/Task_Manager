import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          ></textarea>
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
