//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./exam/Navbar"
import Addbook from "./exam/Addbook"
import Viewbook from './exam/Viewbook';
import ApiDemo from './exam/ApiDemo';
import Home from "./exam/Home";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/addbook" element={<Addbook/>}/>
<Route path="/viewbook" element={<Viewbook/>}/>
<Route path="/api" element={<ApiDemo/>}/>
</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
