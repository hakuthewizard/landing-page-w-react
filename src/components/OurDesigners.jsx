import React from 'react';
import { Element } from 'react-scroll';
import './OurDesigners.css'
import person from './person1.png'
import Footer from './Footer';
import { motion } from "framer-motion";
const OurDesigners = () => {
  return (
    <>
    <Element name='designers-section' className='our-designers-page'>
      <h1 className='title-ourdesigners'>OurDesigners</h1>
      <motion.div
      
       initial={{ opacity: 0, scale: 0.8}}
       whileInView={{ opacity: 1, scale:1 }}
  
       transition={{ ease: "easeOut" }}
      className='designer-cards-wrapper'>

        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <div className='designer-card'>
        <p className='designer-text-name'>name</p>
          <img src={person} alt='' />
          
          <span className='designer-text'><span className='bold-text'>Keywords:</span> Lorem, ipsum dolor, sit amet, consectetur adipiscing, elit.</span>
          <span className='designer-text'><span className='bold-text'>packages created: </span> 25</span>
        </div>
      
        <motion.button className='cta-button-join'
 
 whileHover={{ scale: 1.1}}
 whileTap={{
   scale: 0.8,
   borderRadius: "50%"
 }}

>Join Us</motion.button>
      
      </motion.div>
     
    </Element>
    
</>
  );
};
export default OurDesigners;
