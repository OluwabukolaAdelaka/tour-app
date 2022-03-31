import React from 'react';

const ViewList = ({image, text}) => {
  return (
    <div className='relative'>
        <img src={image} alt={text} className='w-full h-full object-cover' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
            <h2 className='absolute left-4 bottom-4 text-white'>{text}</h2>
        </div>
    </div>
  )
}

export default ViewList;