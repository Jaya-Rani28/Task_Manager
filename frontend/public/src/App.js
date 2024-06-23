import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task.id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
