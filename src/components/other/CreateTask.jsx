import React, { useState } from 'react'

const CreateTask = () => {
const [title,setTitle] = useState("")
const [date,setDate] = useState("")
const [assignTo,setAssignTo] = useState("")
const [category,setCategory] = useState("")
const [description,setDescription] = useState("")
const [task,setTask] = useState({})


const submitHandler = (e)=>{
  e.preventDefault()
  console.log("tasked created");
  console.log(title,date,assignTo,category,description);
  setTitle("")
  setDate("")
  setAssignTo("")
  setCategory("")
  setDescription("")  
  setTask({title,date,assignTo,category,description,active:false,newTask:true,failed:true,completed:false})
  // console.log(task);
  const data  = JSON.parse(localStorage.getItem("employee"))
  console.log(data);
  
}
  return (
<div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className=' flex justify-between  p-6 bg-gray-950'>
              <div className='w-1/2 flex flex-col gap-1.5'>
            <h3>Task title</h3>
            <input value={title} onChange={(e)=>{
              setTitle(e.target.value);
              
            }} className='border-2 p-1.5 w-[60%]' type="text" placeholder='Make a UI design' />
            <h3>Date</h3>
            <input value={date} onChange={(e)=>{
              setDate(e.target.value)
            }} className='border-2 p-1.5 w-[60%]' type="date" />
            <h3>Assign to </h3>
            <input value={assignTo} onChange={(e)=>{
              setAssignTo(e.target.value)
            }} className='border-2 p-1.5 w-[60%]' type="text" placeholder='Employee name' />
            <h3>Category</h3>
            <input value={category} onChange={(e)=>{
              setCategory(e.target.value)
            }} className='border-2 p-1.5 w-[60%]' type="text" placeholder='design,dev,etc' />
              </div>
            <div className='flex flex-col gap-4.5 w-1/2'>
              <h3>Description</h3>
            <textarea value={description} onChange={(e)=>{
              setDescription(e.target.value)
            }} className='h-full border-2 placeholder:font-semibold p-1 outline-none' placeholder='Enter Description'></textarea>
            <button className='bg-green-500 p-1.5 font-bold rounded'>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
