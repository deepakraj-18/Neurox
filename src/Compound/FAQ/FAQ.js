import React from 'react'
import NavbarTwo from '../NavbarTwo';
import FooterPage from '../FooterPage';
import { Container, Grid, Link, Typography, Box } from '@mui/material';

const FAQ = () => {
  return (
    <>
    <NavbarTwo />
    <Container>
        <Box sx={{ textAlign: 'center', my: 20 }}>
          <Typography variant="h2" gutterBottom>
          FAQ
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "24px" }}>
          Electroencephalography, or EEG for short, is one of the most widely used methodologies used by  neuromarketers today.
          </Typography>
          <Box sx={{height:"50px",width:"600px",backgroundColor:"#D9D9D9", borderRadius:"5px",my: 10 , mx:38}} />
          </Box>
        </Container>
    <FooterPage />
    </>
  )
}

export default FAQ