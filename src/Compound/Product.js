import React from 'react';
import video from '../data/comingsoon.mp4';
import { Typography } from '@mui/material';
import NavbarTwo from './NavbarTwo';

export default function Product() {
    return (
        <>
        <NavbarTwo />
        <div className="home-container">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="neuox-container" style={{textAlign:'center'}}>
            <Typography variant='h1'>Product</Typography>
                <span className="neuox-text">Coming <span style={{color:"#09a4fc"}}>Soon </span></span>
            </div>
        </div>
        </>
    );
}
