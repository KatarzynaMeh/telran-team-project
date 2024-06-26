import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import SalesPage from './pages/SalesPage';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { ProductByCategory } from './pages/ProductByCategory';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { Liked } from './components/FavoriteProducts/Liked';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'categories/:id',
        element: <ProductByCategory />,
      },
      {
        path: 'all-products',
        element: <AllProducts />,
      },
      {
        path: 'all-sales',
        element: <SalesPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'favorite',
        element: <Liked />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
