import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Compound/LandingPage'
import Service from './Compound/Service'
import Technology from './Compound/Technology/Technology'
import Lab from './Compound/Lab/Lab'

export default function Router() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/services' element={<Service/>}></Route>
    <Route path='/technology' element={<Technology/>}></Route>
    <Route path='/labs' element={<Lab/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
