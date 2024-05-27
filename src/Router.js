import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Compound/LandingPage'
import Service from './Compound/Services/Service'
import Technology from './Compound/Technology/Technology'
import Lab from './Compound/Lab/Lab'
import Neurodesign from './Compound/Services/Neurodesign'
import NeurobrandTesting from './Compound/Services/NeurobrandTesting'
import UserExperience from './Compound/Services/UserExperience'
import ProductTesting from './Compound/Services/ProductTesting'
import Neuropackaging from './Compound/Services/Neuropackaging'
import NeuroInfoDevelopment from './Compound/Services/NeuroInfoDevelopment'
import EEG from './Compound/Lab/EEG';
import EMG from './Compound/Lab/EMG';
import NCV from './Compound/Lab/NCV';
import Contact from './Compound/Contact';
import About from './Compound/About';
import Event from './Compound/Event/Event';
import Case from './Compound/Case/Case';
import TechnologyEEG from './Compound/Technology/EEG';
import FacialCoding from './Compound/Technology/FacialCoding'
import EyeTracking from './Compound/Technology/EyeTracking'



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
    <Route path='/services/neuro-info-development' element={<NeuroInfoDevelopment/>}></Route>
    
    <Route path='/technology' element={<Technology/>}></Route>
    <Route path='/technology/technology-eeg' element={<TechnologyEEG/>}></Route>
    <Route path='/technology/technology-facial-coding' element={<FacialCoding/>}></Route>
    <Route path='/technology/technology-eye-tracking' element={<EyeTracking/>}></Route>

    <Route path='/labs' element={<Lab/>}></Route>
    <Route path='/eeg' element={<EEG/>}></Route>
    <Route path='/emg' element={<EMG/>}></Route>
    <Route path='/ncv' element={<NCV/>}></Route>
    
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>

    <Route path='/event' element={<Event/>}></Route>
    <Route path='/case' element={<Case/>}></Route>

   </Routes>
   </BrowserRouter>
   </>
  )
}
