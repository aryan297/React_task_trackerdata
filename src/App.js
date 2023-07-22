import Header  from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

const  App=()=> {

  const [tasks ,setTask]=useState([{
    name:"taj",
    id:"1",
    time:"Feb 1 2012"},
    {
        name:"taj",
        id:"2",
        time:"Feb 1 2012" },
        {
            name:"taj",
            id:"3",
            time:"Feb 1 2012" },

])

const onDeleteTask=(id)=>{
  console.log(id,"dd");
  setTask(tasks.filter((task)=> task.id!==id))

}
  return (
    <div className="App">
    <Header title="Task Tracker"/>
    {tasks.length>0?(    <Tasks tasks={tasks} onDeleteTask={onDeleteTask}/>):("NO Task found")}


    </div>
  );
}



export default App;
