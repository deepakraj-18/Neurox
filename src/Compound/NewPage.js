import React, { useEffect } from 'react'
import './Style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../assest/arrow.png'
import { useNavigate } from 'react-router-dom';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const NewPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 2000 }); 
      }, []);

    return (
        <div class="NewPage">
            <div class="NewPage_text-1" data-aos="fade-right">Lets dive into</div>
            <div class="NewPage_text-2" data-aos="fade-right">Technology</div>
            <div class="NewPage_line aos-init aos-animate" data-aos="fade-left"></div>
            <div class="NewPage_section">
                <div class="section-box">
                    <div class="section-text-1">01</div>
                </div>
                <div style={{ height: "max-height",margin:"10px",marginLeft:"30px" }}>
                    <div class="section-text-2">ECG</div>
                    <div className='section-text-3'>
                        Electroencephalography, or EEG for short, is one of the most widely used methodologies used by neuromarketers today.
                    </div>
                </div>
                <div class="section-icon">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="black" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" /></svg> */}
                    <EastRoundedIcon className='easticon'/>
                </div>

            </div>

            <div class="NewPage_section">
                <div class="section-box">
                    <div class="section-text-1">02</div>
                </div>
                <div style={{ height: "max-height",margin:"10px" }}>
                    <div class="section-text-2">FACIAL CODING</div>
                    <div className='section-text-3'>
                        Through the use of facial coding, one can identify and categorize emotions as well as their intensity by observing a person's facial expressions.
                    </div>
                </div>
                <div class="section-icon">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="black" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" /></svg> */}
                    <EastRoundedIcon className='easticon'/>
                </div>
            </div>

            <div class="NewPage_section">
                <div class="section-box">
                    <div class="section-text-1">03</div>
                </div>
                <div style={{ height: "max-height",margin:"10px" }}>
                    <div class="section-text-2">EYE TRACKING</div>
                    <div className='section-text-3'>
                        Eye tracking technology allows for the measurement and analysis of eye movements to gain insights into attention and cognitive processes.
                    </div>
                </div>
                <div class="section-icon">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="black" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" /></svg> */}
                    <EastRoundedIcon className='easticon'/>
                </div>
            </div>


        </div>
    )
}

export default NewPage