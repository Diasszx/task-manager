import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createTask } from '../../services/tasks'

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTask) => createTask(newTask),
    onSuccess: (createdTask) => {
      queryClient.setQueryData(['tasks'], (currentTasks = []) => [
        ...currentTasks,
        createdTask,
      ])
      toast.success('Tarefa adicionada com sucesso!')
    },
    onError: () => {
      toast.error('Erro ao criar tarefa. Por favor, tente novamente.')
    },
  })
}

export default useCreateTask
