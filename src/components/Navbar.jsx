import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>
    </div>
  );
};

export default Navbar;
