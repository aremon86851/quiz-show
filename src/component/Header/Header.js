import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between shadow-md px-16 items-center py-5'>
            <div>
                <Link className='text-4xl font-bold' to="/">Quiz <span className='text-red-600'>Show</span></Link>
            </div>
            <div>
                <ul className='items-center'>
                    <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="">Home</Link>
                    <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="">Topic's</Link>
                    <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="">Statics</Link>
                    <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="">Blog</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;