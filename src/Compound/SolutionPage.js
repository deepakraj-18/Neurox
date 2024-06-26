import React, { useState, useEffect, useRef } from 'react';
import Solution from '../data/Solutions.mp4';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
  
import './Style.css';

const SolutionPage = () => {
  const [animateText, setAnimateText] = useState(false);
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeout = setTimeout(() => {
              setAnimateText(true);
            }, 2000);

            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }

    return () => {
      if (solutionRef.current) {
        observer.unobserve(solutionRef.current);
      }
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <Box className='Solution_page' ref={solutionRef}>
      <video autoPlay loop muted className="background-video_Solution">
        <source src={Solution} alt='Solution'  type="video/mp4" />
      </video>
      <div className='Solution_page-text' data-aos="fade-down">
        <div className={`Solution_page-text-1 ${animateText ? 'animated' : ''}`} >
          Solution that
        </div>
        <div className={`Solution_page-text-2 ${animateText ? 'animated' : ''}`} >
          deliver actionable
        </div>
        <div className={`Solution_page-text-3 ${animateText ? 'animated' : ''}`} >
          insights to client.
        </div>
      </div>
    </Box>
  );
};

export default SolutionPage;
