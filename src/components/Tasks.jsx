import Button from './Button'
import AddIcon from '../assets/icons/add.svg?react'
import TrashIcon from '../assets/icons/trash.svg?react'
import SunIcon from '../assets/icons/sun.svg?react'
import CloudsunIcon from '../assets/icons/cloud-sun.svg?react'
import MoonIcon from '../assets/icons/moon.svg?react'
import TASKS from './constants/CreatedTasks'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [tasks, setTask] = useState(TASKS)
  const morningTasks = tasks.filter((task) => task.time == 'morning')
  const afternoonTasks = tasks.filter((task) => task.time == 'afternoon')
  const eveningTasks = tasks.filter((task) => task.time == 'evening')

  const handleTaskCheckboxClick = (taskId) => {
    const updateTask = tasks.map((task) => {
      if (taskId != task.id) {
        return task
      }

      if (task.status == 'not_started') {
        return { ...task, status: 'in_progress' }
      }

      if (task.status == 'in_progress') {
        return { ...task, status: 'done' }
      }

      if (task.status == 'done') {
        return { ...task, status: 'not_started' }
      }

      return task
    })

    setTask(updateTask)
  }

  const handleTaskDeleteClick = (taskId) => {
    const deleteTask = tasks.filter((tasks) => tasks.id !== taskId)

    setTask(deleteTask)
  }

  return (
    <div className="w-full px-8 py-16">
      <div className="mb-6 flex w-full justify-between">
        <div className="gap-1">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudsunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
