import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Page/Dashboard/Dashboard.jsx';
import Home from './Page/Home/Home.jsx';
import Login from './Page/Login/Login.jsx';
import Register from './Page/Register/Register.jsx';
import AuthProvider from './Components/Hooks/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
