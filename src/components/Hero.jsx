import React from 'react';
import beachVid from '../assets/beachVid.mp4';
import {AiOutlineSearch} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <video className='h-full w-full object-cover'
        src={beachVid} 
        autoPlay
        loop muted/>

        <div className='absolute w-full h-full bg-gray-900/30 top-0'></div>
        <div className='absolute w-full h-full flex flex-col top-0 justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations Worldwide</h2>
        </div>
        <form>
            <input type="text" />
            <button><AiOutlineSearch/></button>
        </form>
    </div>
  )
}

export default Hero;