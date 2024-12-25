import React, { useEffect, useState } from 'react'
import "./CSS/UpdateEmployee.css"
import axios from 'axios';
import toast from 'react-hot-toast';

function UpdateEmployee() {

    let [edata,setedata]=useState({name:"",email:"",age:"",password:"",role:""});

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let updateEmployee=async(e)=>
        {
            e.preventDefault();

            try
            {
              let eid=JSON.parse(localStorage.getItem("emp"))._id
              console.log(eid);
              let res=await axios.put(`http://localhost:4000/api/v1/updateemp/${eid}`,edata);
              if(res.status===200)
                {
                    toast.success(res.data.message)
                }
            }
            catch(err)
            {
             
              console.log(err);
            }
        }
    

        useEffect(()=>
        {
          let empdata=JSON.parse(localStorage.getItem("emp"));
          setedata(empdata)
        },[])

  return (
    <form className='updateemp' onSubmit={updateEmployee}>
        <h1>Employee Updation Form</h1>
      <div>
        <input type="text" placeholder='Fullname' name="name" onChange={changeEdata} value={edata.name}/>
      </div>
      <div>
        <input type="email" placeholder='Email' name="email" onChange={changeEdata} value={edata.email}/>
      </div>
      <div>
        <input type="text"  placeholder='Age' name="age" onChange={changeEdata} value={edata.age}/>
      </div>
      <div>
        <input type="password"  placeholder='Password' name="password" onChange={changeEdata} value={edata.password}/>
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id='role' onChange={changeEdata} value={edata.role}> 
             <option>Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
      </div>
      <div>
        <button className='btn btn-update-form' type='submit'>Update</button>
      </div>
    </form>
  )
}

export default UpdateEmployee
