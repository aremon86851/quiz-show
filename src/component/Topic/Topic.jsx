import React, { useContext, useState } from 'react';
import { QuizContext } from '../../layout/Main';
import DestructureTopic from '../DestructureTopic/DestructureTopic';

const Topic = () => {
    const getTopics = useContext(QuizContext)
    return (
        <div className='my-10'>
            <h2 className='text-center text-5xl my-10 font-semibold'>Topics</h2>
            {
                getTopics.map((topic, idx) => <DestructureTopic key={idx} topics={topic} />)
            }
        </div>
    );
};

export default Topic;