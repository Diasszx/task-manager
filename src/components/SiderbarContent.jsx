import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { HomeIcon, TasksIcon } from '../assets/icons'
import SidebarButton from './SidebarButton'

const SidebarContent = ({ onNavigate }) => {
  return (
    <>
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>

        <p>
          Um simples{' '}
          <span className="text-brand-primary">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <NavLink to="/home" onClick={onNavigate}>
          {({ isActive }) => (
            <SidebarButton color={isActive ? 'selected' : 'unselected'}>
              <HomeIcon />
              Início
            </SidebarButton>
          )}
        </NavLink>

        <NavLink to="/tasks" onClick={onNavigate}>
          {({ isActive }) => (
            <SidebarButton color={isActive ? 'selected' : 'unselected'}>
              <TasksIcon />
              Minhas Tarefas
            </SidebarButton>
          )}
        </NavLink>
      </div>
    </>
  )
}

export default SidebarContent
