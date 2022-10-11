import React, { useContext } from 'react';
import { QuizContext } from '../../layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';


const Statistics = () => {
    let quizIs = useContext(QuizContext)

    for (const quiz of quizIs) {
        quizIs = quiz
    }
    const forStatistic = quizIs.data;
    return (
        <div className='md:mx-52'>
            <div>
                <h1 className='text-center text-5xl font-semibold my-10'>Statistics</h1>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={forStatistic}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;