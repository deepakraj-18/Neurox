import React, { useState, useEffect } from 'react';
import './Style.css';
import MoreOver from '../data/white_arrow.png';
import Design_img_1 from '../data/design-1.png';
import Design_img_2 from '../data/design-2.png';
import Design_img_3 from '../data/design-3.png';
import Design_img_4 from '../data/design-4.png';
import Design_img_5 from '../data/design-5.png';

const DesignPage = () => {
  const [hoveredBar, setHoveredBar] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate the threshold to trigger bar change
      const threshold = window.innerHeight / 2; // Adjust as needed

      // Determine which bar to hover based on scroll direction
      if (scrollPosition < threshold) {
        setHoveredBar(2);
      } else {
        setHoveredBar(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className='Design_page'>
      <div className='Design_part_1'>
        
      </div>
      <div className='Design_contain'>
        <div className={`Design_contain-01 ${hoveredBar === 1 ? 'show' : 'hide'}`}>
          <div className='contain_text-01'>01</div>
          <div className='contain_text-02'>Neurodesign <img src={MoreOver} alt="MoreOver" className="contain_text-moreover" /></div>
          <div className='contain_text-03'>
            <p>
              Originating from the lively streets of Melbourne, Australia, Patty
              Moore is a celebrated director renowned for her enigmatic
              cinematic flair. Unveiling the depths of the human psyche and
              pushing the boundaries of storytelling, Patty Moore is the
              brilliant mind behind some of the most gripping psychological
              thrillers in the industry.
            </p>
          </div>
          <img src={Design_img_1} alt='Design_img_1' className='contain_text-17' />
        </div>

        <div className={`Design_contain-02 ${hoveredBar === 2 ? 'show' : 'hide'}`}>
          <div className='contain_text-04'>02</div>
          <div className='contain_text-05'>Neurobrand testing <img src={MoreOver} alt="MoreOver" className="contain_text-moreover" /></div>
          <div className='contain_text-06'>
            <p>
              Neurotesting enables precise assessment of packaging's
              competitive performance and forecasts impact, ensuring desired
              outcomes and cost efficiency in advertising campaigns with just
              a drawing or interactive narrative.
            </p>
          </div>
          <img src={Design_img_2} alt='Design_img_2' className='contain_text-18' />
        </div>

        <div className={`Design_contain-03 ${hoveredBar === 3 ? 'show' : 'hide'}`}>
          <div className='contain_text-07'>03</div>
          <div className='contain_text-08'>Neuropackaging <img src={MoreOver} alt="MoreOver" className="contain_text-moreover" /></div>
          <div className='contain_text-09'>
            <p>
              Neuropackaging studies how the consumer's brain is impacted by
              your packaging design using EEG. NeuroPackaging provides
              100% objective results so that your packings is as successful as
              feasible.
            </p>
          </div>
          <img src={Design_img_3} alt='Design_img_3' className='contain_text-19' />
        </div>

        <div className={`Design_contain-04 ${hoveredBar === 4 ? 'show' : 'hide'}`}>
          <div className='contain_text-10'>04</div>
          <div className='contain_text-11'>User Experience <img src={MoreOver} alt="MoreOver" className="contain_text-moreover" /></div>
          <div className='contain_text-12'>
            <p>
              Benefits of UX and Usability analysis using biometric and eye
              tracking tools include measuring participants' impulsive visual
              patterns.
            </p>
          </div>
          <img src={Design_img_4} alt='Design_img_4' className='contain_text-20' />
        </div>

        <div className={`Design_contain-05 ${hoveredBar === 5 ? 'show' : 'hide'}`}>
          <div className='contain_text-13'>05</div>
          <div className='contain_text-14'>Product testing <img src={MoreOver} alt="MoreOver" className="contain_text-moreover" /></div>
          <div className='contain_text-15'>
            <p>
              At NeuroX, we conduct product testing by fusing proven,
              conventional organoleptic testing techniques with scientific and
              biometric instruments including biometric response interviews
              (BRI), electroencephalograms (EEGs), and face coding, among
              others.
            </p>
          </div>
          <img src={Design_img_5} alt='Design_img_5' className='contain_text-21' />
        </div>
      </div>
      <div className='Design_bars'>
        <div
          className='Design_bar'
          onMouseEnter={() => setHoveredBar(1)}
          onMouseLeave={() => setHoveredBar(1)}
          style={{ backgroundColor: hoveredBar === 1 ? '#fff' : '#b0b4b7' }}
       />
        <div
          className='Design_bar'
          onMouseEnter={() => setHoveredBar(2)}
          onMouseLeave={() => setHoveredBar(2)}
          style={{ backgroundColor: hoveredBar === 2 ? '#fff' : '#b0b4b7' }}
        />
        <div
          className='Design_bar'
          onMouseEnter={() => setHoveredBar(3)}
          onMouseLeave={() => setHoveredBar(3)}
          style={{ backgroundColor: hoveredBar === 3 ? '#fff' : '#b0b4b7' }}
        />
        <div
          className='Design_bar'
          onMouseEnter={() => setHoveredBar(4)}
          onMouseLeave={() => setHoveredBar(4)}
          style={{ backgroundColor: hoveredBar === 4 ? '#fff' : '#b0b4b7' }}
        />
        <div
          className='Design_bar'
          onMouseEnter={() => setHoveredBar(5)}
          onMouseLeave={() => setHoveredBar(5)}
          style={{ backgroundColor: hoveredBar === 5 ? '#fff' : '#b0b4b7' }}
        />
      </div>
    </div>
  );
};

export default DesignPage;