import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Tasks from './components/Tasks.jsx'
import Home from './pages/home.jsx'
import TaskDetailsPage from './pages/task-details.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/task/:taskId',
    element: <TaskDetailsPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
