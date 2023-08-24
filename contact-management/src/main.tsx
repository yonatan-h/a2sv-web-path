import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Edit, { loader as editLoader, action as editAction } from './routes/edit'
import ErrorPage from './ErrorPage'
import { action as addAction } from './routes/add'
import { action as deleteAllAction } from './routes/delete'
import { loader as rootLoader } from './routes/root'

import ContactView, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact'

const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: 'contacts/:id',
        element: <ContactView />,
        loader: contactLoader,
        action: contactAction,
      },

      {
        path: 'edit/:id',
        element: <Edit />,
        loader: editLoader,
        action: editAction,
      },
    ],
  },

  {
    path: 'add',
    action: addAction,
  },

  {
    path: 'delete',
    action: deleteAllAction,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
