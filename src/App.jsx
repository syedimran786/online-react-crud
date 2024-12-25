import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import EmployeeDetails from './components/EmployeeDetails'
import UpdateEmployee from './components/UpdateEmployee'
import Login from './components/Login'
import Pnf from './components/Pnf'
import Home from './components/Home'
import About from './components/About'

import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './components/AuthProvider'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/addemp" element={<AddEmployee />} />
        <Route path="/emplist" element={<EmployeeList />} />
        <Route path="/updateemp" element={<UpdateEmployee />} />
        <Route path="/empdetails/:eid" element={<EmployeeDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Pnf/>} />

      </Routes>  
    </AuthProvider>
   
    </BrowserRouter>
  )
}

export default App
