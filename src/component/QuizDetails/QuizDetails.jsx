import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({ quiz }) => {
    // console.log(quiz)
    const { question, options, correctAnswer, id } = quiz
    const handleToCorrect = answer => {
        if (correctAnswer === answer) {
            toast('Your answer is Correct', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast('Your answer is Wrong', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const notify = () => toast('Correct Answer is' + ' ' + '"' + correctAnswer + '"', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className='bg-slate-100 my-4 p-10  rounded-lg'>
            <div className='flex justify-between items-center'>
                <p><span className='font-bold'>Quiz :- </span>{question}.</p> <EyeIcon className='w-6 h-6 cursor-pointer' onClick={notify} />
                <ToastContainer />
            </div>
            {
                options.map((option, idx) => <QuizOptions key={idx} option={option} handleToCorrect={handleToCorrect} />)
            }
        </div>
    );
};

export default QuizDetails;