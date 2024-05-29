import React, { useEffect, useState } from 'react';
import video from '../data/video.mp4'
import Logo from '../data/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="neuox-container">
        <span className="neuox-text">N</span>
        <span className="neuox-text">e</span>
        <span className="neuox-text">u</span>
        <span className="neuox-text">r</span>
        <span className="neuox-text">o</span>
      </div>
      <div className="vertical-line">
        <div className="line line-1"></div>
      </div>
      <div className="vertical-line">
        <div className="line line-2"></div>
      </div> */}

      <div className='appearing-box'>
        <div className='neuox-contain'>
          <div className='neuox-contain-1'>
            <img src={Logo} alt='Logo' className='neuox-contain-img' onClick={() => navigate("/home")} />
          </div>
          <div className='neuox-contain-2'>
            <div className="tabs">
              <div className="tab" onClick={() => navigate("/services")}>Services</div>
              <div className="tab" onClick={() => navigate("")}>Product</div>
              <div className="tab" onClick={() => navigate("/technology")}>Technology</div>
              <div className="tab" onClick={() => navigate("")}>Research</div>
              <div className="tab" onClick={() => navigate("")}>Case Studies</div>
              <div className="tab" onClick={() => navigate("")}>Events/Resources</div>
              <div className="tab" onClick={() => navigate("/faq")}>FAQs</div>
              <div className="tab" onClick={() => navigate("/about")}>About Us</div>
              <div className="tab" onClick={() => navigate("/contact")}>Contact</div>
              <div className="tab" onClick={() => navigate("/search")}><SearchIcon sx={{ color: "white" }} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='appearing-box-1'>
        <div className="welcome-text">
          {/* <div className="welcome-text-1">NEUROX IS DIAGNOSTIC AND PREDICTIVE</div> */}
          <Typography variant='h6' sx={{ m: 2, fontSize: "18px", marginTop: "40px" }}>NEUROX IS DIAGNOSTIC AND PREDICTIVE</Typography>
          <Typography variant='h4' sx={{ fontSize: "60px", m: 1 }}>Welcome to</Typography>
          <Typography className="welcome-text-3" variant='h4' sx={{ fontSize: "60px", mx: 1, color: "#007bff" }}>NeuroX</Typography>
          <Typography className='welcome-text-4' data-aos="fade-right" data-aos-delay="600" sx={{ m: 1, color: "#007bff" }}>________</Typography>
          {/* <div className="welcome-text-2">Welcome to </div> */}
          {/* <div className="welcome-text-3" id="neurox-text">
              <span>N</span>
              <span>e</span>
              <span>u</span>
              <span>r</span>
              <span>o</span>
              <span>X</span>
            </div> */}
          {/* <div className="welcome-text-4" data-aos="fade-right" data-aos-delay="600" >________</div> */}
          <Typography className="welcome-text-5" sx={{ m: 0.5 }}>
            <p>
              NeuroX specializes in neurotech sales for research, neurofeedback, BCIs, and more, empowering innovation and personal development..
            </p>
          </Typography>
        </div>

      </div>
    </div>
  );
};

export default HomePage;