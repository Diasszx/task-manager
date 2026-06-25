import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteTask } from '../../services/tasks'

export const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-task', taskId],
    mutationFn: () => deleteTask(taskId),
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ['task', taskId],
      })
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
    onError: () => {
      toast.error('Erro ao deletar tarefa. Por favor, tente novamente!')
    },
  })
}

export default useDeleteTask
