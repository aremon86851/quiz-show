import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
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
