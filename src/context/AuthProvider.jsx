import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext =  createContext()
 const AuthProvider = (props) => {
  
   const [userData,setUserData] =  useState()
 
   useEffect(()=>{
    setLocalStorage()
       const {admin,employee}  = getLocalStorage()
  setUserData({admin,employee})
  // console.log(data.employee);
  // console.log(userData);
  
   },[])

  

  return (
  
    <div>
      <AuthContext.Provider value={userData}>
            {props.children}
      </AuthContext.Provider>
  
    </div>
  )
}

export default AuthProvider
