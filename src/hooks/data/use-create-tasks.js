import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createTask } from '../../services/tasks'

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (newTask) => createTask(newTask),
    onError: () => {
      toast.error('Erro ao criar tarefa. Por favor, tente novamente.')
    },
  })
}

export default useCreateTask
