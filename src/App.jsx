import React, { useEffect, useState } from 'react'
import Taskinput from './Components/Taskinput'
import Tasklist from './Components/Tasklist'

function App() {
  const [Tasks, setTasks] = useState([]);

  //Add Task Function
    const addtask =(text)=>{
  const newTask = {
  id : Date.now(),
  text : text,
  Complete : false,
};
const updateTask = [...Tasks , newTask];
  setTasks(updateTask);
  localStorage.setItem("tasks" , JSON.stringify(updateTask));
}
//delete task function
const DeleteTask=(id) => {
  const updatedTasks = Tasks.filter(task =>task.id != id);
  setTasks(updatedTasks);
  localStorage.setItem("tasks",JSON.stringify(updatedTasks));
}
  // console.log(Tasks);
  // Update Tasks 
  const Updatefunction = (id , newText) =>{
    const UpdateTasks = Tasks.map((task)=>{
      return task.id === id ? { ...task ,text:newText}:task;
    })
    setTasks(UpdateTasks);
    localStorage.setItem("tasks" , JSON.stringify(UpdateTasks))
  }
  //using useffect
 useEffect(()=>{
const StoredTasks = JSON.parse(localStorage.getItem("tasks"))||[];
setTasks(StoredTasks);
 },[])
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-blue-100'>
        <div className={`w-full max-w-md p-6 bg-white rounded-lg m-5 md:mg-1 lg:mg-1`}>
          <Taskinput addtask ={addtask}/>
          <Tasklist tasks={Tasks} DeleteTask ={DeleteTask} Updatefunction={Updatefunction}/>

        </div>
      </div>

    </>
  )
}

export default App