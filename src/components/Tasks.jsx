import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  AddIcon,
  CloudsunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import { fetchTasks } from '../services/tasks'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'
import Header from './Header'
import TaskItem from './TaskItem'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })

  const morningTasks = tasks?.filter((task) => task.time == 'morning') ?? []
  const afternoonTasks = tasks?.filter((task) => task.time == 'afternoon') ?? []
  const eveningTasks = tasks?.filter((task) => task.time == 'evening') ?? []

  const onDeleteTaskSucess = async (taskDeletedId) => {
    queryClient.setQueryData(['tasks'], (currentTask = []) =>
      currentTask.filter((t) => t.id !== taskDeletedId)
    )
    queryClient.removeQueries({ queryKey: ['task', taskDeletedId] })
    toast.success('Tarefa Deletada com sucesso!')
  }

  return (
    <div className="w-full px-8 py-16">
      <Header title="Minhas Tarefas" subtitle="Minhas Tarefas"></Header>
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
              onDeleteSucess={onDeleteTaskSucess}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
