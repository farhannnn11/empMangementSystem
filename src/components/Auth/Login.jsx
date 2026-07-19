import React, { useState } from 'react'

const Login = (props) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Submited");
        console.log(email,password);
        props.handleLogin(email,password)

        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='border-2 border-green-600 p-49'>
        <h1 className='font-bold text-center pb-9.5 text-2xl'>Login Page</h1>

            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col gap-2.5 '>
                <input onChange={(e)=>{
                setEmail(e.target.value);
                    //  console.log(formval);
                }} value={email} className='border-2 border-amber-300 font-semibold px-5.5 py-3.5 w-90.5  outline-none placeholder:font-bold' type="email" placeholder='Enter your email' />
                
                <input onChange={(e)=>{
                    setPassword(e.target.value);
                }} value={password} className='border-2 border-amber-300 font-semibold px-5.5 py-3.5 w-90.5 text-1xl outline-none placeholder:font-bold' type="password" placeholder='Enter Password' />
               <button className='bg-green-600 p-2 font-extrabold'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
