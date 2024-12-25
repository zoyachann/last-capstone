import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import ProductDetails from './components/ProductDetails/ProductDetail';
import Layout from './components/Layout/Layout';
import ProfileDashboard from './components/MyAccount/profile';
import ChangePassword from './components/MyAccount/ChangePassword';
import Error from "./components/ErrorPage/error";

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
        path: "product-details/:product_id",
        element: <ProductDetails />,
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

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

