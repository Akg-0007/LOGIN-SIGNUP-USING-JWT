import axios from 'axios';
import Cookies from "js-cookie";

const url='http://localhost:8000';

export const Addusers= async(data)=>{
 try {
   return await axios.post(`${url}/add`,data)
   
 } catch (error) {
  console.log("error while calling add user api",error)

 }
}
export const Logusers = async (data) => {
  try {
     return await axios.post(`${url}/login`, data);
    
  } catch (error) {
    console.log("error while calling login user api", error);
  }
};
//localstorage
const loc = JSON.parse(localStorage.getItem('user')); 
const x=JSON.parse(loc);
const tok=x.data.token;
//coookies
const loc1 = JSON.parse(Cookies.get('user')); 
const x1=JSON.parse(loc1);
const tok1=x1.data.token;
console.log(tok1,"tok1");


export const getuser= async ()=>{
  try{
      return await  axios.get(`${url}/all`,{ headers: {"Authorization" : `Bearer ${tok1}`} })
      }
      catch(error){
       console.log("error while calling get users Api",error)
      }
}

