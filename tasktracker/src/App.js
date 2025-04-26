import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
     setTasks([...tasks, newTask]);
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
