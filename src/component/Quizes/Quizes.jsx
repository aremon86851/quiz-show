import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizes = () => {
    const quizIs = useLoaderData()
    const { status, data } = quizIs
    let allQuiz = data.questions
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mt-5'>Quiz for "{data.name}"</h2>
            <div className='w-2/4 my-0 mx-auto'>
                {
                    allQuiz.map(quiz => <QuizDetails key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default Quizes;