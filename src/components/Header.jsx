import React from 'react';
import logo from '../assets/logo.png'; 
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <img src={logo} alt="" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-semibold'>{format(new Date(), "EEEE, LLLL dd, yyyy ")}</p>
        </div>
    );
};

export default Header;