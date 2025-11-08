import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Items from './Components/Items'
import React, { useState, useEffect } from 'react'
import Cart from './Components/Cart'
import Final from './Components/Final'
import Login from './Components/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Components/Footer'




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/final' element={ <Final />} />
        <Route path='/items/:type' element={ <Items />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
