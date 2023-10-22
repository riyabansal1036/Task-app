import React from 'react'
const Task=({title,description,deleteTask,index}) =>{
// const Task = ({title,description}) => {
  return (
    <div className='task'>
       <div>
        <p>{title}</p>
        <span>{description }</span>
       </div>
       <button onClick={() =>deleteTask(index)}>-</button>
    </div>
  );
};

export default Task
