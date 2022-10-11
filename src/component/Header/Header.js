import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [clicks, setClicks] = useState(false)
    return (
        <>
            <div className='flex justify-between shadow-md px-10 items-center py-5'>
                <div>
                    <Link className='text-4xl font-bold' to="/">Quiz <span className='text-red-600'>Show</span></Link>
                </div>
                <div>
                    {/* <ul className='items-center'>
                        <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/">Home</Link>
                        <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/topics">Topic's</Link>
                        <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/statistics">Statistics</Link>
                        <Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/blog">Blog</Link>
                    </ul> */}
                    <nav className='w-full'>
                        <div onClick={() => setClicks(!clicks)} className='w-6 h-6 cursor-pointer md:hidden'>
                            {
                                clicks ? <XCircleIcon /> : <Bars3Icon />
                            }
                        </div>
                        <span>{clicks}</span>
                    </nav>
                    <div className={`left-[-0]  text-white md:text-black text-center md:flex justify-center w-full duration-500 ease-in-out md:static absolute ${clicks ? 'top-16' : 'top-[-525px]'}`}>
                        {
                            <ul className='items-center md:flex bg-purple-500 md:bg-white'>
                                <li className='list-none'><Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/">Home</Link></li>
                                <li className='list-none'><Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/topics">Topic's</Link></li>
                                <li className='list-none'><Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/statistics">Statistics</Link></li>
                                <li className='list-none'><Link className='text-2xl font-medium mx-4 hover:text-red-600' to="/blog">Blog</Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </div>

            <div>

            </div>

        </>
    );
};

export default Header;