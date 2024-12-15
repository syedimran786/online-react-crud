import React from 'react'
import { NavLink } from 'react-router-dom'
import "./CSS/Navbar.css";


function Navbar() {
  return (
    <nav>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/addemp">Add Employee</NavLink>
        <NavLink to="/emplist">Employee List</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Navbar
