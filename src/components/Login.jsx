import React, { useState } from 'react'
import "./CSS/Login.css"
import axios from 'axios';

function Login() {

    let [edata,setedata]=useState({email:"",password:""});

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let loginEmployee=async(e)=>
        {
            e.preventDefault();
            let res=await axios.post('http://localhost:4000/api/v1/emplogin',edata,{
              withCredentials:true
            });;
            console.log(res)
        }
    

  return (
    <form className='loginemp' onSubmit={loginEmployee}>
        <h1>Login Form</h1>
      <div>
        <input type="text" placeholder='Fullname' name="email" onChange={changeEdata}/>
      </div>
      <div>
        <input type="password"  placeholder='Password' name="password" onChange={changeEdata}/>
      </div>
      <div>
        <button className='btn btn-login' type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Login
