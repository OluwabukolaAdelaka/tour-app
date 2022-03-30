import React from 'react';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 text-center py-16'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Carribean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4'>
            <img className='h-full w-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt="resort pic" />
            <img className='h-full w-full object-cover' src={borabora2} alt="resort pic" />
            <img className='h-full w-full object-cover' src={keywest} alt="resort pic" />
            <img className='h-full w-full object-cover' src={maldives} alt="resort pic" />
            <img className='h-full w-full object-cover' src={maldives2} alt="resort pic" />
        </div>
    </div>
  )
}

export default Destinations;