import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Addusers } from '../service/Api'

const SignUp = () => {
  const [data,setdata]=useState({
   name:'',
   email:'',
   password:'', 
  })
  const nav=useNavigate();
  const valchange=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
  }
  const Adduser=async(e)=>{
    e.preventDefault();
    const { name, email, password } = data
        if( name && email && password ){
    await Addusers(data);
        
    console.log(data)
   nav('/Login');
        }
        else{
          alert("invalid input")
        }
  }
 
  return (
    <div>
        
        <main class="container">
        <section class="content">
          
          <h1 class="content__title">Sign Up</h1>
          <form class="content__form" onSubmit={Adduser} >
            <label for="name">Full name</label>
            <input type="text" name="name" placeholder=""  onChange={(e)=>valchange(e)}/>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="akg@venturepact.com"  onChange={(e)=>valchange(e)}/>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="*********"  onChange={(e)=>valchange(e)}/>
            <button type="submit"  >Get Started</button>
          </form>
          <p class="content__login">Alread have an account? <a href="#">Login</a></p>
        </section>
        <figure class="image">
          <img src="https://images.hdqwalls.com/wallpapers/across-the-spider-verse-c7.jpg" alt="banner"/>
        </figure>
      </main>
    </div>
  )
}

export default SignUp