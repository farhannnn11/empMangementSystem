import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="flex flex-col m-10  gap-10.5">
      <h1 className='text-center font-extrabold text-3xl'>Admin Dashboard</h1>
      <Header chngeUser={props.chngeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
