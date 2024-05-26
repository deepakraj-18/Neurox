import React, { useEffect } from 'react';
import Detail_video from '../data/AN ANALYSIS OF NEURONS.mp4';
import MoreOver from '../data/more_over.png';
import './Style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);

  return (
    <div className="detail_page">
      <div className="detail-box-1">
        <div className="detail-text-3" data-aos="fade-right">_____________________________________</div>
        <div className="detail-text-1" data-aos="fade-right">
          <span style={{ color: '#07A3FC'}}>NeuroX</span> stands out in the market with its unique blend of neuroscience expertise, high-end technology, and tailored solutions that deliver actionable insights to clients.
        </div>
        <div className="detail-text-2">
          NeuroX is revolutionizing the way businesses understand consumer behavior by merging cutting-edge neuroscience with marketing strategies. Our team of experts utilizes state-of-the-art technologies such as EEG, Facial Coding , and Eye Tracking to uncover deep insights into consumer preferences, emotions, and decision-making processes.
        </div>
      </div>
      <div className="detail-box-2">
        <div>
          <video autoPlay loop muted className='Detail_video' data-aos="fade-left">
            <source src={Detail_video} type="video/mp4" />
          </video>
          <p className="video-name">AN ANALYSIS OF NEURONS</p>
        </div>
        <img src={MoreOver} alt="MoreOver" className="MoreOver" />
        <div className="detail-text-6" data-aos="fade-left">_____________________________________</div>
      </div>
    </div>
  );
};

export default DetailPage;
