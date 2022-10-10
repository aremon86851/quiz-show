import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Home = () => {
    return (
        <div>
            <Banner />
            <Topic />
        </div>
    );
};

export default Home;