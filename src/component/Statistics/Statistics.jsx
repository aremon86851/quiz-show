import React, { useContext } from 'react';
import { QuizContext } from '../../layout/Main';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const Statistics = () => {
    let quizIs = useContext(QuizContext)

    for (const quiz of quizIs) {
        quizIs = quiz
    }
    const forStatistic = quizIs.data;
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-center text-5xl font-semibold my-10'>Statistics</h1>
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
            </div>
        </div>
    );
};

export default Statistics;