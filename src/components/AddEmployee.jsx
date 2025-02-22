import React, { useState } from 'react'
import "./CSS/AddEmployee.css"
import axios from 'axios';
import Popup from './Popup';

function AddEmployee() {

    let [edata,setedata]=useState({name:"",email:"",age:"",password:"",role:""});
    let [showpopup,setshowpopup]=useState(false)

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let addEmployee=async (e)=>
        {
            e.preventDefault();

           try
           {
            let resp=await axios.post("http://localhost:4000/api/v1/addemp",edata);
            // console.log(resp);
            setshowpopup(true);
           }
           catch(err)
           {
            console.log(err);
           }
        }
    

  return (
   <>
   {showpopup && <Popup message="Employee Added Sucessfully" setshowpopup={setshowpopup}/>}
    <form className='addemp' onSubmit={addEmployee}>
        <h1>Employee Registration Form</h1>
      <div>
        <input type="text" placeholder='Fullname' name="name" onChange={changeEdata}/>
      </div>
      <div>
        <input type="email" placeholder='Email' name="email" onChange={changeEdata}/>
      </div>
      <div>
        <input type="text"  placeholder='Age' name="age" onChange={changeEdata}/>
      </div>
      <div>
        <input type="password"  placeholder='Password' name="password" onChange={changeEdata}/>
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id='role'  onChange={changeEdata}>
            <option value="admin">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
      </div>
      <div>
        <button className='btn btn-add' type='submit'>Add</button>
      </div>
    </form>
   </>
  )
}

export default AddEmployee
