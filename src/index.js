import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import Layout from './components/Layout/Layout';
import ProfileDashboard from './components/MyAccount/profile';
import ChangePassword from './components/MyAccount/ChangePassword';
import Error from "./components/ErrorPage/error";
import ProductDetailsPage from './components/Product/ProductDetails/ProductDetail';

import ContactPage from './components/contact/contact';
import ShopCards from './components/shops/shops';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/ProductDetailsPage/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "account/profile",
        element: <ProfileDashboard />,
      },
      {
        path: '/update-password',
        element: <ChangePassword />
      },
      {
        path: '/profile-page',
        element: <ProfileDashboard />
      },
      {
        path: "*",
        element: <Error />,
      },

      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/shops',
        element: <ShopCards />
      }

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

