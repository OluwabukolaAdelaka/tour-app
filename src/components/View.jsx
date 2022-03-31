import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import KeyWest from '../assets/keywest.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import ViewList from './ViewList';


const View = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 px-4 py-16 gap-4'>
        <ViewList image={BoraBora} text='Bora Bora' />
        <ViewList image={BoraBora2} text='Antigua' />
        <ViewList image={KeyWest} text='KeyWest' />
        <ViewList image={Maldives} text='Maldives' />
        <ViewList image={Maldives2} text='Jamaica' />
        <ViewList image={Maldives3} text='Cozumel' />
    </div>
  )
}

export default View;