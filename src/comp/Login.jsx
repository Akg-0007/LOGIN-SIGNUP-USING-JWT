import {  useState} from "react";
import { Logusers } from "../service/Api";
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'
import Cookies from "js-cookie";



const Login = () => {
  const [data,setdata]=useState({
    email:'',
    password:'', 
   })
   const nav=useNavigate();
   const valchange=(e)=>{
   setdata({...data,[e.target.name]:e.target.value})
   }
   const Loginuser=async(e)=>{
    e.preventDefault();
    const user= JSON.stringify(await Logusers(data));
    localStorage.setItem("user",JSON.stringify(user))
    Cookies.set("user",JSON.stringify(user))
   
    
   
     
     nav('/dashboard');
   }

  return (
    
    <main class="container">
        <section class="content">
          
          <h1 class="content__title">Login</h1>
          <form onSubmit={Loginuser} class="content__form">
            
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="" value={data.email} onChange={valchange} />
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="" value={data.password}  onChange={valchange}/>
            
            <button type="submit" >Login </button>
          </form>
          <p class="content__login">Alread have an account? <a href="#">Login</a></p>
        </section>
        <figure class="image">
          <img src="https://images.hdqwalls.com/wallpapers/across-the-spider-verse-c7.jpg" alt="banner"/>
        </figure>
      </main>
  )
}

export default Login