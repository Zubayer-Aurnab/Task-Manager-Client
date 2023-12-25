import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import AuthProvider from './Components/Hooks/AuthProvider/AuthProvider.jsx';
import './index.css';
import CreatedTask from './Page/Dashboard/CreateTask/CreateTask.jsx';
import Dashboard from './Page/Dashboard/Dashboard.jsx';
import FinishedTask from './Page/Dashboard/FinishedTask/FinishedTask.jsx';
import MyTask from './Page/Dashboard/MyTask/MyTask.jsx';
import Home from './Page/Home/Home.jsx';
import Login from './Page/Login/Login.jsx';
import Register from './Page/Register/Register.jsx';

const queryClient = new QueryClient()
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
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <MyTask />
          },
          {
            path: "my-created",
            element: <CreatedTask />
          },
          {
            path: "finished",
            element: <FinishedTask />
          }
        ]
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
