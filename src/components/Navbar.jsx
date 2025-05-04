import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div>
                <nav className='flex gap-5 text-accent'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </nav>
            </div>
            <div className='flex items-center gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;