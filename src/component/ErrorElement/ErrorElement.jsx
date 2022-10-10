import React from 'react';
import { Link } from 'react-router-dom';
const ErrorElement = () => {
    return (
        <div className='text-center mt-44'>
            <div>
                <h1 className='text-9xl mb-5'>4O4</h1>
                <p className='mb-8 text-2xl'>Not found this page in this website. Please go</p>
                <Link className=' bg-yellow-300 py-2 px-7 text-2xl rounded-2xl font-semibold mt-6 shadow-md hover:bg-sky-400 hover:text-white' to="/">Home</Link>
            </div>
        </div>
    );
};

export default ErrorElement;