import React from 'react'
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import DesignPage from './DesignPage';
import ServicePage from './ServicePage';
import SolutionPage from './SolutionPage';
import TestimonialPage from './TestimonialPage';
import PartnersPage from './PartnersPage';
import JoinusPage from './JoinusPage';
import FooterPage from './FooterPage';
import ScrollAnimation from './ScrollAnimation';
import AboutUs from './AboutUs';
import Range from './Range';
import Navbar from './Navbar';
import NewPage from './NewPage';
import Service from './Services/Service';

export default function LandingPage() {
    return (
        <>
            
            <HomePage />
            <AboutUs />
            <Range />
            <NewPage />
            {/* <DesignPage /> */}
            {/* <ScrollAnimation/> */}
            {/* <ServicePage /> */}
            <SolutionPage />
            <TestimonialPage />
            <PartnersPage />
            <JoinusPage />
            <FooterPage />
        </>
    )
}
