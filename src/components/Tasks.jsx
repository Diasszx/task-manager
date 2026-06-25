import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import {
  AddIcon,
  CloudsunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import { fetchTasks, fetchTasksById, updateTask } from '../services/tasks'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'
import TaskItem from './TaskItem'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })

  const [addTaskDialogIsOpen, setaddTaskDialogIsOpen] = useState(false)
  const morningTasks = tasks.filter((task) => task.time == 'morning')
  const afternoonTasks = tasks.filter((task) => task.time == 'afternoon')
  const eveningTasks = tasks.filter((task) => task.time == 'evening')

  const onSubmitTaskSucess = async (newTask) => {
    queryClient.setQueryData(['tasks'], (currentTasks = []) => [
      ...currentTasks,
      newTask,
    ])
    toast.success('Tarefa adicionada com sucesso!')
  }

  const onTaskSubmitError = () => {
    return toast.error('Erro ao adicionar tarefa. Por favor, tente novamente')
  }

  const handleTaskCheckboxClick = async (taskId) => {
    const task = await fetchTasksById(taskId)

    const statusMap = {
      not_started: {
        next: 'in_progress',
        message: 'Tarefa iniciada com sucesso!',
      },
      in_progress: { next: 'done', message: 'Tarefa concluída com sucesso!' },
      done: { next: 'not_started', message: 'Tarefa finalizada com sucesso!' },
    }
    const { next, message } = statusMap[task.status]

    queryClient.setQueryData(['tasks'], (currentTask = []) =>
      currentTask.map((t) => (t.id === taskId ? { ...t, status: next } : t))
    )
    toast.success(message)
    await updateTask(taskId, { status: next })
  }

  const onDeleteTaskSucess = async (taskDeletedId) => {
    queryClient.setQueryData(['tasks'], (currentTask = []) =>
      currentTask.filter((t) => t.id !== taskDeletedId)
    )
    queryClient.removeQueries({ queryKey: ['task', taskDeletedId] })
    toast.success('Tarefa Deletada com sucesso!')
  }

  return (
    <div className="w-full px-8 py-16">
      <div className="mb-6 flex w-full justify-between">
        <div className="gap-1">
          <span className="text-xs font-semibold text-brand-primary">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button color="ghost">
            Limpar Tarefas <TrashIcon />
          </Button>
          <Button color="primary" onClick={() => setaddTaskDialogIsOpen(true)}>
            Nova Tarefa
            <AddIcon />
          </Button>
          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setaddTaskDialogIsOpen(false)}
            onSubmitSucess={onSubmitTaskSucess}
            onSubmitError={onTaskSubmitError}
          ></AddTaskDialog>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã.
            </p>
          )}
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onDeleteTaskSucess}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudsunIcon />} />
          {afternoonTasks.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da tarde.
            </p>
          )}
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onDeleteTaskSucess}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da noite.
            </p>
          )}
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onDeleteTaskSucess}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
