import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizDetails = ({ quiz }) => {
    console.log(quiz)
    const { question, options, correctAnswer, id } = quiz
    return (
        <div className='bg-slate-100 my-4 p-10  '>
            <form>
                <p><span className='font-bold'>Quiz :- </span>{question}</p>
                {
                    options.map((option, idx) => <QuizOptions key={idx} option={option} />)
                }

            </form>
        </div>
    );
};

export default QuizDetails;