import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='flex flex-col gap-12 m-22'>
      <h1 className='text-center font-extrabold text-3xl'>Employee Dashboard</h1>
        <Header data={props.data} chngeUser={props.chngeUser} />
        <TaskNumberList data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
