import { PanelRight } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen md:flex">
      <Toaster richColors position="top-center" />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <header className="flex items-center p-4 md:hidden">
        <button type="button" onClick={handleOpenSidebar}>
          <PanelRight />
        </button>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
