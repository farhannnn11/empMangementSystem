import React from 'react'

const CompleteTask = (props) => {
    console.log(props.data);
    
    return (
    <div>
                       <div className='shrink-0 bg-green-600 h-60 w-60 rounded-[15px]'>
            <div className='flex justify-between p-2.5 mt-1.5 font-semibold'> 
                <button className='bg-red-800 px-3 py-1'>{props.data.category}</button>
                <h1>{props.data.taskDate}</h1>
            </div>
            <h1 className='px-2 pt-2 font-semibold'>{props.data.taskTitle}</h1>
            <p className='pt-1 px-2 text-[14px]'>{props.data.taskDescription}</p>
                    <div >
                <h5 className='text-center mt-18 font-bold  bg-green-600 p-2'> Completed</h5>
            </div>
      </div>
    </div>
  )
}

export default CompleteTask
