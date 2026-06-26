import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Tasks from './components/Tasks.jsx'
import RootLayout from './layouts/rootLayout.jsx'
import { taskDetailsLoader } from './loaders/taskDetailsLoader.js'
import { tasksLoader } from './loaders/tasksLoader.js'
import Home from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'
import TaskDetailsPage from './pages/task-details.jsx'
import queryClient from './queryClient.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    HydrateFallback: () => <div>Carregando...</div>,
    children: [
      {
        path: '/home',
        element: <Home />,
        index: true,
        loader: tasksLoader,
      },
      {
        path: '/tasks',
        element: <Tasks />,
        loader: tasksLoader,
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
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </StrictMode>
  </QueryClientProvider>
)
