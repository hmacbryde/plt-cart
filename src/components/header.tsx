import React from 'react';
import logo from '../img/logo2.png';

const Header: React.FC = () => {
  return (
    <div className='text-center header bg-black fixed w-full flex justify-center md:justify-start items-center z-1'>
        <header className='text-white p-4'>
        <img src={logo} alt="Logo" className="mx-auto mt-0 ml-0 w-80 md:mr-0" />
        <div className="relative flex items-center">
      </div>
        </header>
    </div>
  );
};

export default Header;