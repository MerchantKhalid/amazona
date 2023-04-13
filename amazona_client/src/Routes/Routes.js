import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main.js';
import Login from '../door/Login.js';
import Register from '../door/Register.js';
import Home from '../Pages/Home/Home.js';
import ProductScreen from '../screens/ProductScreen.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/product/:slug',
        element: <ProductScreen></ProductScreen>,
      },
    ],
  },
]);
