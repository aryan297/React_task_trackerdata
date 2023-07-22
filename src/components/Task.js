
const Task = ({task ,onDeleteTask}) => {
  return (
    <div>
        <h1 >{task.name} </h1>
    <p >{task.time}</p>
    <button  onClick={()=>onDeleteTask(task.id)} >delete</button>
    </div>
  )
}

export default Task