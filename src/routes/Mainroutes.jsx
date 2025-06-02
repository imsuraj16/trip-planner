import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Trips from '../pages/Trips'
import Addtrip from "../pages/Addtrip"
import About from '../pages/About'
import Tripdetails from '../pages/Tripdetails'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/trips' element = {<Trips/>}/>
      <Route path='/trips/tripdetails/:id' element = {<Tripdetails/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/add-trip' element = {<Addtrip/>}/>
    </Routes>
  )
}

export default Mainroutes
