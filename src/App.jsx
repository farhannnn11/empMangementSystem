import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {


  const [user,setUser] = useState("")
  const [loggedInUserData,setLoggedInUserData] = useState()
  const Authdata = useContext(AuthContext)
  console.log();

  useEffect(()=>{
    if(Authdata){
    const loggedInUser = localStorage.getItem("loggedInUser")
    }
  },[Authdata])

  const handleLogin = (email,password)=>{
    console.log(email,password);
    if(email == "admin@123" && password == 123){
      console.log("this is admin");
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }else if(Authdata){
      const employees = Authdata.employee.find((e)=>email == e.email && password == e.password)
      if(employees){
      console.log("this is employee");
      setUser("employee")
      setLoggedInUserData(employees)
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'})) 
      }
 

    }else{
      alert("Invalid Credentials")
    }
    
    
  }

  
  return (
      <>
      {!user?<Login handleLogin={handleLogin} />:""}
      {user == "admin"? <AdminDashboard chngeUser={setUser} />:""}
      {user == "employee"? <EmployeeDashboard chngeUser={setUser} data={loggedInUserData} />:""}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      </>
  )
}

export default App
