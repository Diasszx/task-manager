import { useState } from 'react'
import { toast } from 'sonner'

import {
  AddIcon,
  CloudsunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'
import TASKS from './constants/CreatedTasks'
import TaskItem from './TaskItem'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const [tasks, setTask] = useState(TASKS)
  const [addTaskDialogIsOpen, setaddTaskDialogIsOpen] = useState(false)
  const morningTasks = tasks.filter((task) => task.time == 'morning')
  const afternoonTasks = tasks.filter((task) => task.time == 'afternoon')
  const eveningTasks = tasks.filter((task) => task.time == 'evening')

  const handleTaskCheckboxClick = (taskId) => {
    const updateTask = tasks.map((task) => {
      if (taskId != task.id) {
        return task
      }

      if (task.status == 'not_started') {
        toast.success('Tarefa iniciada com sucesso!')
        return { ...task, status: 'in_progress' }
      }

      if (task.status == 'in_progress') {
        toast.success('Tarefa concluída com sucesso!')
        return { ...task, status: 'done' }
      }

      if (task.status == 'done') {
        toast.success('Tarefa reiniciada com sucesso!')
        return { ...task, status: 'not_started' }
      }

      return task
    })

    setTask(updateTask)
  }

  const handleTaskDeleteClick = (taskId) => {
    const deleteTask = tasks.filter((tasks) => tasks.id !== taskId)

    setTask(deleteTask)
    toast.success('Tarefa Deletada com sucesso!')
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
          <Button
            variant="primary"
            onClick={() => setaddTaskDialogIsOpen(true)}
          >
            Nova Tarefa
            <AddIcon />
          </Button>
          <AddTaskDialog isOpen={addTaskDialogIsOpen}></AddTaskDialog>
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
