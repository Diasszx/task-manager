import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Tasks from './components/Tasks.jsx'
import RootLayout from './layouts/rootLayout.jsx'
import { taskDetailsLoader } from './loaders/taskDetailsLoader.js'
import Home from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
        index: true,
      },
      {
        path: '/tasks',
        element: <Tasks />,
      },
      {
        path: '/task/:taskId',
        element: <TaskDetailsPage />,
        loader: taskDetailsLoader,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
