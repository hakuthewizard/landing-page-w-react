import React from 'react';
import './MainSection.css';
import downloadIcon from './downloadIcon.png';
import { motion } from "framer-motion";

const MainSection= () => {
  return (
    <div id="main-section" className='main-section-container' >
      <p  className='main-text'>Over 5.000 inspiring & creative digital 
assets for your next project!</p>
    <p className='desc-text'>Try our ... themed digital asset pack for free today!</p>
   <input 
   className='email-input'
   placeholder='e-mail adress'
   type='text'
   />
   <motion.button className='cta-button'
 
      whileHover={{ scale: 1.1}}
      whileTap={{
        scale: 0.8,
        borderRadius: "50%"
      }}

   >Try Now</motion.button>

   <motion.div className='hero-img'
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }}
    >

    </motion.div>


   <img className='downloadIcon' src={downloadIcon}/>
   <p className='downloadText'>10.000+ downloads daily</p>
    </div>
  );
};

export default MainSection;
