import React from 'react';
import './Style.css';
import ServiceVideo from '../data/Blog.mp4';
import card1 from '../data/card1.png';
import card2 from '../data/card2.png';
import card3 from '../data/card3.png';
import EastIcon from '@mui/icons-material/ArrowForward';

const ServicePage = () => {
  return (
    <div className='Service_page'>
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={ServiceVideo} type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className='Service_page_content'>
        {/* Card 1 */}
        <div className='Service_page_card' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className='Service_page_card-1'>
            <img src={card3} alt='Card 3' className='Service_card_image' />
            <div className='Service_page_text'>
              <div className='Service_page_text-1'>
                How to Implement Al Into Your Work
              </div>
              <div className='Service_page_text-2'>
                July 22, 2028
              </div>
              <div className='Service_page_text'>
                <span className='Service_page_text-3'>
                  Read full post
                </span>
                <span className='Service_page_text-5'>
                  <EastIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>
        

        {/* Card 2 */}
        <div className='Service_page_card' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className='Service_page_card-1'>
            <img src={card1} alt='Card 1' className='Service_card_image' />
            <div className='Service_page_text'>
              <div className='Service_page_text-1'>
                WFH’s the New Normal
              </div>
              <div className='Service_page_text-2'>
                July 22, 2028
              </div>
              <div className='Service_page_text'>
                <span className='Service_page_text-3'>
                  Read full post
                </span>
                <span className='Service_page_text-4'>
                  <EastIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='Service_page_card'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className='Service_page_card-1'>
            <img src={card2} alt='Card 2' className='Service_card_image' />
            <div className='Service_page_text'>
              <div className='Service_page_text-1'>
              What's New with the Company
              </div>
              <div className='Service_page_text-2'>
                July 22, 2028
              </div>
              <div className='Service_page_text'>
                <span className='Service_page_text-3'>
                  Read full post 
                </span>
                <span className='Service_page_text-5'>
                  <EastIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
