import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../component/Header/Header';

export const QuizContext = createContext([])
const Main = () => {
    const getTopics = useLoaderData()
    return (
        <QuizContext.Provider value={[getTopics]}>
            <div>
                <Header />
                <Outlet />
            </div>
        </QuizContext.Provider>
    );
};

export default Main;