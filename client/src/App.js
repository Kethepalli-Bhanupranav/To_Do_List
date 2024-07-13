import './App.css';
import { useState } from 'react';
import { Task } from './task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const updateTask = (id, newTaskName) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, taskname: newTaskName } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <Task
            key={task.id}
            taskname={task.taskname}
            id={task.id}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
