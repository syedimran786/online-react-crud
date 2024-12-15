import React, { useState } from 'react'
import "./CSS/Login.css"

function Login() {

    let [edata,setedata]=useState({email:"",password:""});

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let loginEmployee=(e)=>
        {
            e.preventDefault();
        }
    

  return (
    <form className='loginemp' onSubmit={loginEmployee}>
        <h1>Login Form</h1>
      <div>
        <input type="text" placeholder='Fullname' name="name" onChange={changeEdata}/>
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
