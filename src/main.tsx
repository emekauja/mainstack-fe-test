import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Revenue } from './routes/revenue/revenue.tsx';

const url = 'https://fe-task-api.mainstack.io';

export async function loader() {
  const result = (
    await Promise.all([
      fetch(`${url}/user`),
      fetch(`${url}/wallet`),
      fetch(`${url}/transactions`),
    ])
  ).map((r) => r.json());

  const newData = await Promise.all(result);
  console.log('user ===> ', newData[0]);
  console.log('walletData ===> ', newData[1]);
  console.log('transactions ===> ', newData[2]);

  if (!newData) throw new Response('', { status: 404 });

  return newData;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    // errorElement: <ErrorPage />
    children: [
      {
        index: true,
        element: <Navigate to="/revenue" replace />,
      },
      {
        path: 'revenue',
        element: <Revenue />,
        loader: loader,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
