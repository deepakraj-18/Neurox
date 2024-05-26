import React from 'react';
import './Style.css';
import logo from '../data/logo.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreOver from '../data/black_arrow.png'


const FooterPage = () => {
  return (
    <div className='Footer_page'>
      <div className='Footer-container'>
        <div className='Footer-item-1'>
            <img src={logo} alt='logo' className='Footer_logo' />
            <div className='Footer-text-1'>
                <p>
                NeuroX is revolutionizing the way businesses understand consumer behavior by  merging cutting-edge neuroscience with marketing strategies. Our team of experts  utilizes state-of-the-art technologies such as EEG, Facial Coding, and Eye Tracking to  uncover deep insights into consumer preferences, emotions, and decision-making  processes. With our own state-of-the-art lab based in London and a team of passionate  professionals
                </p>
            </div>
            <div className='Footer-text-2'>
                <FaFacebookF/>
                <FaTwitter />
                <FaLinkedinIn/>
                <FaInstagram/>
            </div>
        </div>
        <div className='Footer-item-2'>
        <div className='Footer-text-3'>
            <div className='Footer-text-header'>
                Navigation
            </div>
            <div className='Footer-text-subheader'>Service</div>
            <div className='Footer-text-subheader'>Technology</div>
            <div className='Footer-text-subheader'>Case Study</div>
            <div className='Footer-text-subheader'>Resource</div>
            <div className='Footer-text-subheader'>Contact</div>
        </div>
        <div className='Footer-text-4'>
            <div className='Footer-text-header'>
                Licence
            </div>
            <div className='Footer-text-subheader'>Privacy Policy</div>
            <div className='Footer-text-subheader'>Copyright</div>
            <div className='Footer-text-subheader'>Email Address</div>
        </div>
        <div className='Footer-text-5'>
            <div className='Footer-text-header'>
            Contact
            </div>

            <div className='Footer-text-subheader'><CallIcon className='CallIcon'/>+44 7564 522241</div>
            <div className='Footer-text-subheader'><EmailIcon className='EmailIcon' />contact@neurox.co.uk</div>
            <div className='Footer-text-subheader'><LocationOnIcon className='LocationOnIcon' />20 Wenlock Road, London, N1 7GU</div>
        </div>
        
        </div>
        <div className='Footer-item-3'>
            <img src={MoreOver} alt='MoreOver' />
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
