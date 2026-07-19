import React, { useState } from 'react'
import { useNavigate } from "react-router";
const Header = (props) => {

  
  console.log(props.data);
  const [logout,setLogout] = useState("")
 const logoutNav = useNavigate()
  const logoutHandler = ()=>{
    setLogout("logout")
   localStorage.setItem("loggedInUser","") 
    props.chngeUser("")
  //  window.location.reload()
  }
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Hello 😀  </h1>
        
        
        <button onClick={()=>{logoutHandler()}} className='bg-red-600 rounded font-bold p-2 active:scale-95 cursor-pointer'>Log Out</button>
      </div>
    </div>
  )
}

export default Header
