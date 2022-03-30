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
            <h2 className='py-3'>Top 1% Locations Worldwide</h2>
            <form className='flex justify-between items-center border w-full max-w-[700px] mx-auto p-1 bg-gray-100/90 text-black rounded-md'>
                <div>
                    <input className='bg-transparent w-[270px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Search destinations' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:'white'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero;