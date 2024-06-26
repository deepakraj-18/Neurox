import React from 'react';
import './Style.css';
import Joinus_video from '../data/footer.mp4';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';


const JoinusPage = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box className='Joinus_page'>
      <div className='Joinus_page_video'>
        <video autoPlay loop muted className='Joinus_video' >
          <source src={Joinus_video} type="video/mp4" />
        </video>
      </div>
      <Box className='Joinus_page_text'>
        <div className='joinus_box'>
          <div className='Joinus_text-1' data-aos="fade-up" >Ready to work with us ?</div>
          <button className='joinus_button' data-aos="fade-up" style={{ textAlign: "center" }}>Get Started<ArrowForwardIcon sx={{ color: "white" }} className='Joinus_arrow' /></button>
        </div>

      </Box>
    </Box>
  );
};

export default JoinusPage;
