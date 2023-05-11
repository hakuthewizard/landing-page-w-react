import React from 'react'
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import OurDesigners from './components/OurDesigners';
import Assets from './components/Assets';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <Assets/>
      <OurDesigners/>
      <Footer/>
    </div>
  )
}

export default App;
