import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const TopicDetails = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div className='shadow-xl rounded-lg'>
            <div className=' bg-slate-100 p-3'>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='px-3 pb-3'>
                <h2 className='text-3xl font-semibold my-2'>{name}</h2>
                <p className='text-gray-500 italic'>Total quiz: {total}</p>
                <Link to={`/topics/${id}`}>
                    <button className='flex items-center bg-yellow-300 py-2 px-7 text-1xl rounded-2xl font-semibold mt-6 shadow-md hover:bg-sky-400 hover:text-white w-full justify-center'>
                        <span>Let's Start</span><ArrowSmallRightIcon className='h-6 w-6 items-center ml-2' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TopicDetails;