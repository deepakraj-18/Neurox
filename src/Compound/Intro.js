import React, { useEffect } from 'react';
import Logo from '../data/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import video from '../data/video.mp4';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("home")
        }, 3000);
    }, [])

    return (
        <div className="home-container">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="neuox-container">
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
            </div>

            {/* <div className='appearing-box'>
                <div className='neuox-contain'>
                    <div className='neuox-contain-1'>
                        <img src={Logo} alt='Logo' className='neuox-contain-img' />
                    </div>
                    <div className='neuox-contain-2'>
                        <div className="tabs">
                            <div className="tab" onClick={() => navigate("services")}>Services</div>
                            <div className="tab" onClick={() => navigate("")}>Product</div>
                            <div className="tab" onClick={() => navigate("technology")}>Technology</div>
                            <div className="tab" onClick={() => navigate("")}>Research</div>
                            <div className="tab" onClick={() => navigate("")}>Case Studies</div>
                            <div className="tab" onClick={() => navigate("")}>Events/Resources</div>
                            <div className="tab" onClick={() => navigate("")}>FAQs</div>
                            <div className="tab" onClick={() => navigate("about")}>About Us</div>
                            <div className="tab" onClick={() => navigate("contact")}>Contact</div>
                            <div className="tab"><SearchIcon sx={{ color: "white" }} /></div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
