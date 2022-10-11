import React from 'react';

const QuizOptions = ({ option, handleToCorrect }) => {
    return (
        <div>
            <div onClick={() => handleToCorrect(option)} className='shadow-lg my-4 mx-2 p-2 rounded-lg text-center hover:cursor-pointer'>
                <p>{option}.</p>
            </div>
        </div >
    );
};

export default QuizOptions;