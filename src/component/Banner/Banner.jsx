import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='text-center bg-gradient-to-r from-sky-500 to-indigo-500 py-32'>
            <h2 className='banner-heading'><span className='banner-heading text-white font-semibold text-5xl'>Welcome To</span> <br /><span className='banner-heading text-8xl font-bold'>Quiz <span className='banner-heading text-white'>Show!!</span></span></h2>
            <p className=' text-white mt-8 text-1xl'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly <br /> about a certain or variety of subjects.This website just made for <br /> increase your knowledge. </p>
            <Link to="/topics">
                <button className='bg-yellow-300 py-2 px-7 text-2xl rounded-2xl font-semibold mt-6 shadow-md hover:bg-sky-400 hover:text-white'>Topic's</button>
            </Link>
        </div>
    );
};

export default Banner;