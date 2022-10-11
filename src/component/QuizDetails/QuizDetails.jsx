import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizDetails = ({ quiz }) => {
    // console.log(quiz)
    const { question, options, correctAnswer, id } = quiz
    const handleToCorrect = answer => {
        if (correctAnswer === answer) {
            console.log("Right Answer")
        } else {
            console.log("Wrong Answer")
        }
    }
    return (
        <div className='bg-slate-100 my-4 p-10  '>
            <p><span className='font-bold'>Quiz :- </span>{question}.</p>
            {
                options.map((option, idx) => <QuizOptions key={idx} option={option} handleToCorrect={handleToCorrect} />)
            }
        </div>
    );
};

export default QuizDetails;