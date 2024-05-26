import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Compound/LandingPage'
import Service from './Compound/Service'
import Technology from './Compound/Technology/Technology'
import Lab from './Compound/Lab/Lab'
import Neurodesign from './Compound/Services/Neurodesign'
import NeurobrandTesting from './Compound/Services/NeurobrandTesting'
import UserExperience from './Compound/Services/UserExperience'
import ProductTesting from './Compound/Services/ProductTesting'
import Neuropackaging from './Compound/Services/Neuropackaging'

export default function Router() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}></Route>

    <Route path='/services' element={<Service/>}></Route>
    <Route path='/services/neurodesign' element={<Neurodesign/>}></Route>
    <Route path='/services/neurobrand-testing' element={<NeurobrandTesting/>}></Route>
    <Route path='/services/user-experience' element={<UserExperience/>}></Route>
    <Route path='/services/product-testing' element={<ProductTesting/>}></Route>
    <Route path='/services/neuro-packaging' element={<Neuropackaging/>}></Route>
    
    <Route path='/technology/:query' element={<Technology/>}></Route>
    <Route path='/labs/:query' element={<Lab/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
