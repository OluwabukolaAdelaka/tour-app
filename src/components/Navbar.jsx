import React, {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {RiMenu4Fill} from 'react-icons/ri';
import {AiOutlineClose} from 'react-icons/ai';
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    <div className='flex items-center w-full justify-between px-4 h-20'>
        <div onClick={handleNav}>
            <h1 className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <AiOutlineSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>

        {/* hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose size={20}/> : <RiMenu4Fill size={20}/>}
        </div>

      {/* mobile menu */}
      {/* 'absolute left-0 top-0 w-full bg-gray-100/90 py-6 px-4' */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 py-6 px-4' : 
      'absolute left-[-100%]'}>
          <ul >
              <h1 className='border-b'>BEACHES.</h1>
              <li className='border-b'>Home</li>
              <li className='border-b'>Destinations</li>
              <li className='border-b'>Travel</li>
              <li className='border-b'>View</li>
              <li className='border-b'>Book</li>
            <div className='flex flex-col'>
             <button className='my-6'>Search</button>
             <button>Account</button>
            </div>
            <div className='flex py-8 justify-between'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
            </div>
          </ul>
      </div>
    </div>
  )
}

export default Navbar;