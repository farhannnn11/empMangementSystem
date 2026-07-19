import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = (props) => {
     console.log(props.data.tasks);
  return (
    <div id='box' className='h-[55%] flex gap-6 overflow-x-auto justify-center items-center'>

        {props.data.tasks.map((elems,index)=>{
            
             if(elems.active){
                return <AcceptTask key={index} data={elems}/>
            }
            if(elems.completed){
                return <CompleteTask  key={index} data={elems}/>
            }
            if(elems.failed){
                return <FailedTask key={index} data={elems}/>
            }
            if(elems.newTask){
                return <NewTask key={index} data={elems}/>
            }
        })}
        
        {/* <AcceptTask />
        <CompleteTask />
        <FailedTask />
        <NewTask /> */}

 
    </div>
  )
}

export default TaskList
