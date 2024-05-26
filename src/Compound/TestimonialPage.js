import React from 'react';
import './Style.css';
import SamplePage from './SamplePage'; 

const TestimonialPage = () => {
  return (
    <div className='Testimonial_container'>
      <div className='Testimonial_container_text' data-aos="fade-down">
      What they
      </div>
      <div className='Testimonial_container_text-1' data-aos="fade-down" >
      say.
      </div>
      <div className="Testimonal_sample">
      <SamplePage/>
      </div>
      
    </div>
  )
}

export default TestimonialPage;