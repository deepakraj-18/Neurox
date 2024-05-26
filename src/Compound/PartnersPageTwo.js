import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';

import img1 from '../data/Brands/Brand 0.png';
import img2 from '../data/Brands/pngwing 10.png';
import img3 from '../data/Brands/pngwing 2.png';
import img4 from '../data/Brands/pngwing 3.png';
import img5 from '../data/Brands/pngwing 4.png';
import img6 from '../data/Brands/pngwing 5.png';
import img7 from '../data/Brands/pngwing 6.png';
import img8 from '../data/Brands/pngwing 7.png';
import img9 from '../data/Brands/pngwing 8.png';
import img10 from '../data/Brands/pngwing 9.png';

const imagePaths = [img10, img2, img3, img4, img5, img6, img7, img8, img9, img1];

const PartnersPageTwo = () => {
  AOS.init({ duration: 1000 });

  return (
    <div className='Partners_page'>
      {/* <div className='Partners_page_text-1'data-aos="fade-right">Our very own</div>
      <div className='Partners_page_text-2'data-aos="fade-right">Partners.</div>
      <div className='Technology_page_line' data-aos="fade-left"></div> */}
      {/* <div className='Technology_page_line-1' data-aos="fade-down"></div> */}
      <div className='Partners_page_brands'>
        <div className='Partners_page_brands_container'>
          {imagePaths.map((imagePath, index) => (
            <img key={index} src={imagePath} alt={`Brand ${index + 1}`} className='Partners_page_img' />
          ))}
          {/* Duplicate images for looping */}
          {imagePaths.map((imagePath, index) => (
            <img key={index + imagePaths.length} src={imagePath} alt={`Brand ${index + 1}`} className='Partners_page_img' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPageTwo;
