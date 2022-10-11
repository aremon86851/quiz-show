import React from 'react';
import Statistics from '../Statistics/Statistics';
import TopicDetails from '../TopicDetails/TopicDetails';

const DestructureTopic = ({ topics }) => {
    const categories = topics.data
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 md:mx-20 mx-5'>
                {
                    categories.map(topic => <TopicDetails key={topic.id} topic={topic} />)
                }
            </div>
        </>
    );
};

export default DestructureTopic;