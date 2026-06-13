import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Tasks from './components/Tasks.jsx'
import RootLayout from './layouts/rootLayout.jsx'
import Home from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'
import TaskDetailsPage from './pages/task-details.jsx'

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
