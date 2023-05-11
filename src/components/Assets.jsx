import React, { useState, useEffect,useMemo} from 'react';
import { Element } from 'react-scroll';
import './Assets.css';
import folder from './folder.png';
import { motion,useScroll } from "framer-motion";
import heart from './assets/heart.png';

const categories = [
  { id: 'vectors', label: 'Vectors', type: 'vector' },
  { id: 'photos', label: 'Photos', type: 'photo' },
  { id: 'icons', label: 'Icons', type: 'icon' },
  { id: 'illustrations', label: 'Illustrations', type: 'illustration' },
  { id: '3d', label: '3D', type: '3d' },
  { id: 'free', label: 'Free', type: 'free' },
];
const Assets = () => {
  const { scrollYProgress } = useScroll();
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };
  const [checkboxes, setCheckboxes] = useState(() => {
    const initialCheckboxes = {};
    categories.forEach((category) => {
      initialCheckboxes[category.id] = false;
    });
    return initialCheckboxes;
  });
  
  const selectedCategories = useMemo(() => {
    return categories.filter((category) => checkboxes[category.id]).map((category) => category.type);
  }, [categories, checkboxes]);
  
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [id]: checked }));
  };
  
  useEffect(() => {
    const assetPackContainers = document.querySelectorAll('.pack-container');
    assetPackContainers.forEach((container) => {
      const type = container.getAttribute('data-type');
      if (selectedCategories.length === 0 || selectedCategories.includes(type)) {
        container.style.display = 'grid';
      } else {
        container.style.display = 'none';
      }
    });
  }, [selectedCategories]);
  
  
  return (
    <Element name='assets-section' className='assets-container'>
      <div
        
      >
      <h1 className='header-design-assets'>Design Assets</h1>
      
      <div className='design-asset-containers'>

        <div className='container1'>
            <h3 className='categories-header'>Categories</h3>
            <div className='categories'>
      {categories.map((category) => (
        <div key={category.id}>
          <input
            className='input-checkbox'
            type='checkbox'
            id={category.id}
            checked={checkboxes[category.id]}
            onChange={handleCheckboxChange}
          />
          <label className='input-checkbox-label' htmlFor={category.id}>
            {category.label}
          </label>
        </div>
      ))}
    </div>
           
        </div>

        <div className='container2' 
   
        >
       <div className="pack-container" data-type="vector">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 1</h4>
  </div>
</div>
<div className="pack-container" data-type="illustration">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 2</h4>
  </div>
</div>
<div className="pack-container" data-type="free">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 3</h4>
  </div>
</div>
<div className="pack-container" data-type="icon">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 4</h4>
  </div>
</div>
<div className="pack-container" data-type="photo">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 5</h4>
  </div>
</div>
<div className="pack-container" data-type="illustration">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 6</h4>
  </div>
</div>
<div className="pack-container" data-type="vector">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 7</h4>
  </div>
</div>
<div className="pack-container" data-type="photo">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 8</h4>
  </div>
</div>
<div className="pack-container" data-type="3d">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 9</h4>
  </div>
</div>
<div className="pack-container" data-type="vector">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 10</h4>
  </div>
</div>
  
<div className="pack-container" data-type="illustration">
  <div className="asset-folder-wrapper">
    <img src={heart} className='asset-folder-image'/>
    <h4 className='asset-folder-desc'>Asset Pack 11</h4>
  </div>
</div>
  
</div>

      </div>
      </div>
    </Element>
  );
};

export default Assets;
