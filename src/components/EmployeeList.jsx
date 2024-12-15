import React, { useEffect, useState } from 'react'
import "./CSS/EmployeeList.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

function EmployeeList() {
let [emplist,setemplist]=useState([]);
let [showpopup,setshowpopup]=useState(false)

let navigateToEmpDetails=useNavigate();
let navigateToUpdateEmp=useNavigate();


let getEmployees=async()=>
{
    try{
        let res=await axios.get("http://localhost:4000/api/v1/getemps");
        // console.log(res.data.data);
        setemplist(res.data.data)
    }
    catch(err)
    {
        console.log(object);
    }
}
 useEffect(()=>
{
    getEmployees()
},[])

let viewEmployee=(id)=>
{
    navigateToEmpDetails(`/empdetails/${id}`)
}

let deleteEmployee=async(id)=>
{
    try
    {
        let res=await axios.delete(`http://localhost:4000/api/v1/deleteemp/${id}`);
        console.log(res);
        setshowpopup(true)
    }
    catch(err)
    {
        console.log(err);
    }
    getEmployees()
}

let updateEmployee=(emp)=>
{

    localStorage.setItem("emp", JSON.stringify(emp))

    navigateToUpdateEmp('/updateemp')
}
  return (
    <>
    {showpopup && <Popup message="Employee Deleted Successfully" setshowpopup={setshowpopup} bgcolor="red"/>}
        <table>
        <thead>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          {emplist.map((emp,index)=>
        {
            return   <tr key={emp._id}>
                <td>{index+1}</td>
                <td className='ename'>{emp.name}</td>
                <td>{emp.email}</td>
                <td>
                    <button onClick={()=>{viewEmployee(emp._id)}} className='btn btn-view'>View</button>
                </td>
                <td>
                    <button onClick={()=>{updateEmployee(emp)}} className='btn btn-update'>Update</button>
                </td>
                <td>
                    <button onClick={()=>{deleteEmployee(emp._id)}} className='btn btn-delete'>Delete</button>
                </td>
        </tr>
        })}
           
        </tbody>
        
    </table>
    </>
  )
}

export default EmployeeList
