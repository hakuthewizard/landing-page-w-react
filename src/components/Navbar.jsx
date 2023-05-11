import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import sparkle from './sparkle.png'
const Navbar = () => {
    return (
        <nav className='navbar-container'>
              <div style={{ position: 'relative' }}>
        
            </div>
          <h1 className='header1'>AssetFactory</h1>
     
            <Link className='navbar-links' to='main-section' smooth={true} duration={500}>
           <img src={sparkle} className='sparkle-image'/>
             Home 
            </Link>
      
         
            <Link className='navbar-links' to='assets-section' smooth={true} duration={500}>
            <img src={sparkle} className='sparkle-image'/>
              Assets
            </Link>
         
         
            <Link className='navbar-links'  to='designers-section' smooth={true} duration={500}>
            <img src={sparkle} className='sparkle-image'/>
              Our Designers
            </Link>
          

        </nav>
      );
};

export default Navbar;
