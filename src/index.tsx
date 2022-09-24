import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { HomePage } from './pages/Home';
import { ErrorPage } from './pages/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const container = document.getElementById('root')!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
