import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootFile from './router/RootFile.jsx'
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import MultipleStepSignup from './pages/MultipleStepSignup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/multisignup",
        element: <MultipleStepSignup />,
      }
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
