import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Quizes from './component/Quizes/Quizes';
import ErrorElement from './component/ErrorElement/ErrorElement';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorElement />,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/topics',
          element: <Topics />
        },
        {
          path: '/topics/:topicsId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <Quizes />
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        },
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
