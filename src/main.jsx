import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';

import ErrorPage from './components/ErrorPage/ErrorPage';

import DonationDetails from './components/DonationDetails/DonationDetails';
import AppliedDonations from './components/AppliedDonation/AppliedDonations';
import MainStatistics from './components/Statistics/MainStatistics';
import Statistics from './components/Statistics/Statistics';
import Login from './components/login/Login';
import Register from './components/login/Register';
import ServicesDetails from './components/Services/ServiceDetails';
import ServiceDetails from './components/Services/ServiceDetails';
import RequireAuth from './components/login/RequireAuth/RequireAuth';
import WorkDetails from './components/Works/WorkDetails';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/contact',
        element:<Contact></Contact>
      }, 
      {
        path: '/donation', 
        element:<AppliedDonations></AppliedDonations>,
        loader: () => fetch('/donation.json') // warning: only load the data you need. do not load all the data
      },
      {
        path: '/statistics', 
        element:<MainStatistics></MainStatistics>,
        loader: () => fetch('/donation.json') // warning: only load the data you need. do not load all the data
      },

      {
        path: '/login', 
        element:<Login></Login>,
        // warning: only load the data you need. do not load all the data
      },
      {
        path: '/register', 
        element:<Register></Register>,
        // warning: only load the data you need. do not load all the data
      },
      
     
      
      {
        path: '/donation/:id',
        element:<DonationDetails></DonationDetails>, 
        loader: () => fetch('/donation.json') // do not load all data. load only what you need
      },

      {
        path: '/service/:id',
        element:<RequireAuth>
          <ServiceDetails></ServiceDetails>
        </RequireAuth>, 
        loader: () => fetch('/service.json') // do not load all data. load only what you need
      },

      {
        path: '/work/:id',
        element:<RequireAuth>
          <WorkDetails></WorkDetails>
        </RequireAuth>, 
        loader: () => fetch('/services.json') // do not load all data. load only what you need
      },
      {
        path: '*',
        element:<Error></Error> // do not load all data. load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
