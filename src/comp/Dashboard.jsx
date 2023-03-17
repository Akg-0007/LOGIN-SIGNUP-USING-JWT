import React from 'react'
import { useState,useEffect } from 'react'
import { getuser } from '../service/Api'

const Dashboard = () => {
  const[users,setusers]=useState([])
  useEffect(()=>{
getallusers();
  },[])
  const getallusers=async()=>{
      const resp=await getuser();
    
      setusers(resp.data);
      
  }

  return (
    <div className='d-flex'> welcome to Dashboard
      {users &&
        users.map((e)=>
          <div key={e._id}>
            <h1>{e.name}</h1>
            <h2>{e.email}</h2>
          </div>
        )
      }
    </div>
  )
}

export default Dashboard