import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightAside = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <button className='btn btn-outline btn-info w-full mb-3'><FcGoogle size={18} />Login with Google</button>
            <button className='btn btn-outline btn-primary w-full '><FaGithub size={18} />Login with Github</button>
        </div>
    );
};

export default RightAside;