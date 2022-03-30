import React from 'react';
import beachVid from '../assets/beachVid.mp4';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <video className='h-full w-full object-cover'
        src={beachVid} 
        autoPlay
        loop muted/>
    </div>
  )
}

export default Hero;