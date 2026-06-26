import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { taskMutations } from '../../keys/mutations'
import { updateTask } from '../../services/tasks'

export const useUpdateTask = (taskId) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: taskMutations.update(taskId),
    mutationFn: (data) =>
      updateTask(taskId, {
        title: data.title.trim(),
        time: data.time.trim(),
        description: data.description.trim(),
      }),

    onSuccess: (updatedTask) => {
      queryClient.setQueryData(['task', taskId], updatedTask)
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Tarefa atualizada com sucesso!')
      navigate('/tasks')
    },
    onError: () => {
      toast.error('Erro ao atualizar tarefa. Por favor, tente novamente!')
    },
  })
}

export default useUpdateTask
