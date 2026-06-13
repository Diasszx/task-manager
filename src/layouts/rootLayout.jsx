import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

import Sidebar from '../components/Sidebar'

const RootLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Toaster richColors position="top-center" />
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
