import React from 'react'
import images from './Imgs'
import { motion } from 'framer-motion'
import './Slider.css'
import { useRef,useEffect,useState } from 'react'

const Slider = () => {
  return (
    <motion.div className='Slider-container'>
        <motion.div drag='x' 
        dragConstraints ={{right: 0, left: -1306}}  className='Slider'>
            {images.map(image => {
                return(
                    <motion.div className='item'>
                        <img src={image}alt=''/>
                    </motion.div>
                );
            })}
        </motion.div>
    </motion.div>
  );
}

export default Slider