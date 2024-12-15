import React, { useEffect, useState } from 'react'
import "./CSS/EmployeeDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

function EmployeeDetails() {

  let [empdata,setempdata]=useState({})
  let {eid}=useParams();
  // console.log(eid);

  let getSingleEmployee=async()=>
  {
    try
    {
      let res=await axios.get(`http://localhost:4000/api/v1/getemp/${eid}`);
      setempdata(res.data.data)
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(()=>
  {
    getSingleEmployee()
  },[])
  return (
    <div className='empdetails'>
        <h1>Name: {empdata.name}</h1>
        <p>Age: {empdata.age}</p>
        <p>Email: {empdata.email}</p>
        <p>Role: {empdata.role}</p>
    </div>
  )
}

export default EmployeeDetails
