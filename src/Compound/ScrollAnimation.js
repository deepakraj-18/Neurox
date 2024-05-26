import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css'; 
import EGG from '../data/EEG.png';
import Facial from '../data/Facial coding.png';
import Eye from '../data/Eye Tracking.png';

const ScrollAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const scrollAnimationRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (scrollAnimationRef.current) {
      observer.observe(scrollAnimationRef.current);
    }

    AOS.init({ duration: 1000 });

    return () => {
      if (scrollAnimationRef.current) {
        observer.unobserve(scrollAnimationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const handleEndIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setReachedEnd(true);
        } else {
          setReachedEnd(false);
        }
      });
    };

    const endObserver = new IntersectionObserver(handleEndIntersect, options);

    if (detailsRef.current) {
      endObserver.observe(detailsRef.current);
    }

    return () => {
      if (detailsRef.current) {
        endObserver.unobserve(detailsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      setExpanded(true);
    }
  }, [animate]);

  return (
    <div ref={scrollAnimationRef} className='ScrollAnimation'>
      <div className='ScrollAnimation-box1'>
        <div className={`ScrollAnimation-text ${animate ? 'fade-out' : ''}`}>Let's dive into</div>
        <div className={`ScrollAnimation-text-1 ${animate ? 'fade-out' : ''}`}>technology.</div>
        <div className={`Technology_page_line ${animate ? 'fade-out' : ''}`} data-aos="fade-left"></div>
        <div className={`Technology_page_line-1 ${animate ? 'fade-out' : ''}`} data-aos="fade-down"></div>
      </div>
      <div
        className={`ScrollAnimation-box2 ${expanded ? 'expanded' : ''}`}
        style={{
          top: animate ? 0 : '60vh',
          transition: 'top 1s ease-in-out',
        }}
      >
        <div ref={detailsRef} className='ScrollAnimation-details'>
          <div className='Details_EGG' style={{ 
            position: 'relative',
            top: reachedEnd ? '80%' : '0',
            transition: 'top 0.5s ease-in-out',
          }}>
            <div className='Details_text-1'>01</div>
            <div className='Details_text-2'>EEG</div>
            <img src={EGG} className='Details_img' alt='EEG' />
            <div className='Details_text-3'>
              Electroencephalography, or EEG for short, is one of the most widely used methodologies used by neuromarketers today.
            </div>
          </div>
          <div className='Details_Facial'>
            <div className='Details_text-1'>02</div>
            <div className='Details_text-2'>Facial</div>
            <img src={Facial} className='Details_img' alt='Facial Coding' />
            <div className='Details_text-3'>
              Through the use of facial coding, one can identify and categorize emotions as well as their intensity by observing a person's facial expressions.
            </div>
          </div>
          <div className='Details_Eye' style={{ 
            position: 'relative',
            top: reachedEnd ? '80%' : '160%',
            transition: 'top 0.5s ease-in-out',
          }}>
            <div className='Details_text-1'>03</div>
            <div className='Details_text-2'>Eye</div>
            <img src={Eye} className='Details_img' alt='Eye_Tracking' />
            <div className='Details_text-3'>
              Eye tracking technology allows for the measurement and analysis of eye movements to gain insights into attention and cognitive processes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;