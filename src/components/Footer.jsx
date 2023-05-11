import React from 'react'
import tw from './tw.png'
import yt from './yt.png'
import insta from './insta.png'
import './Footer.css'
import copyright from './copyright.png'
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className='footer-container'>
            
        <div className='footer-links'>
            
            <p>Why AssetFactory</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Platform</p>
            <p>Resources</p>
            <span><p>Terms</p></span>
                <span><p>Privacy</p></span>
            </div>
        <div>
                <img className="copyright-img" src={copyright}/>
                <p  className='footer-bottom-infotext'>2023, AssetFactoryPlatform, Inc</p>
               
                <p className="footer-bottom-infotext text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas, nobis cumque non nihil tempore!</p>
            </div>
        <div>
            <h4  className='subscribe-newsletter'>Subscribe to our newsletter</h4>
            <input
            className='input-mail'
            type='text'
            />
             <motion.button className='subscribe-button'
 
 whileHover={{ scale: 1.1}}
 whileTap={{
   scale: 0.8,
   borderRadius: "50%"
 }}

>Subscribe</motion.button>     
            </div>
        <div className='sm-links'>
            <img src={tw}/>
            <img src={yt}/>
            <img src={insta}/>
        </div>
    </div>
  )
}

export default Footer;