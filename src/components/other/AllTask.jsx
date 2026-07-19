import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  console.log(authData.employee);
  
  return (

    
    <div>

            <div className='flex gap-3.5 flex-col  p-5 '>

              <div className='border-2 bg-blue-800 p-4.5 flex justify-center rounded font-bold'>
        <h2 className='w-1/5 text-center'>Name</h2>   
        <h2 className='w-1/5 text-center'>New Task</h2>
        <h3 className='w-1/5 text-center text-amber-300'> Active Task </h3>
        <h2 className='w-1/5 text-center text-green-500'>Completed Task </h2>
        <h2 className='w-1/5 text-center text-red-600'>Failed Task</h2>
     
      </div>
      
      </div>

      <div className='allTask flex gap-3.5 flex-col overflow-auto p-5 h-50'>

              {authData.employee.map((elems,idx)=>{
        return <div key={idx} className='border-2 border-blue-800 p-4.5 flex justify-center rounded'>
        <h2 className='w-1/5 text-center font-semibold'>{elems.name}</h2>   
        <h2 className='w-1/5 text-center font-semibold'>{elems.taskCount.newTask}</h2>
        <h3 className='w-1/5 text-center font-semibold text-amber-300 '> {elems.taskCount.active}</h3>
        <h2 className='w-1/5 text-center font-semibold text-green-500'> {elems.taskCount.completed}</h2>
        <h2 className='w-1/5 text-center font-semibold text-red-600'> {elems.taskCount.failed}</h2>
     
      </div>
      })}
      </div>


    </div>
  )
}

export default AllTask
