import React from 'react';
import Statistics from '../Statistics/Statistics';
import TopicDetails from '../TopicDetails/TopicDetails';

const DestructureTopic = ({ topics }) => {
    const categories = topics.data
    return (
        <>
            <div className='grid grid-cols-4 gap-5 mx-20'>
                {
                    categories.map(topic => <TopicDetails key={topic.id} topic={topic} />)
                }
            </div>
        </>
    );
};

export default DestructureTopic;