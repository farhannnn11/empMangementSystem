import React from 'react'

const TaskNumberList = (props) => {
  return (
    
    <div className='flex gap-6.5 justify-center'>
      <div className='bg-amber-300 w-[24%] p-4.5  h-20 font-semibold rounded text-black'>
        <h1>{props.data.taskCount.newTask}</h1>
        <h2>New Task</h2>
      </div>
      <div className='bg-blue-800 w-[24%] p-4.5  h-20 font-semibold rounded text-white'>
        <h1>{props.data.taskCount.active}</h1>
        <h2>Active Task</h2>
      </div>
      <div className='bg-green-600 w-[24%] p-4.5 h-20 font-semibold rounded text-black'>
        <h1>{props.data.taskCount.completed}</h1>
        <h2>Completed Task</h2>
      </div>
      <div className='bg-red-700 w-[24%] p-4.5  h-20 font-semibold rounded text-black'>
        <h1>{props.data.taskCount.failed}</h1>
        <h2>Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskNumberList
