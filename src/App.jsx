import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { tasks as data } from "./tasks"
import { useState, useEffect } from "react";

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      setTasks(data);
  }, []);
  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
  }
  function deleteTask(taskID){
    setTasks(tasks.filter(task => task.id !== taskID)); 
  }
  return <main className="bg-zinc-900 h-screen">
  <div className="container mx-auto">
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks} deleteTask={deleteTask}/>
  </div>
  </main>
}

export default App