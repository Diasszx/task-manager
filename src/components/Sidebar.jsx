import { NavLink } from 'react-router-dom'

import { HomeIcon, TasksIcon } from '../assets/icons'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p>
          Um simples{'  '}
          <span className="text-brand-primary">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <NavLink to="/">
          {({ isActive }) => (
            <SidebarButton color={isActive ? 'selected' : 'unselected'}>
              <HomeIcon />
              Inicio
            </SidebarButton>
          )}
        </NavLink>
        <NavLink to="/tasks">
          {({ isActive }) => (
            <SidebarButton color={isActive ? 'selected' : 'unselected'}>
              <TasksIcon />
              Minhas Tarefas
            </SidebarButton>
          )}
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
