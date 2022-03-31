import React from 'react';
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-100 py-16 w-full'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className="sm:flex justify-between items-center text-center">
                <h1>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[240px] my-4'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </div>

            <div className='flex justify-between pt-4'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='lg:flex text-right'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;