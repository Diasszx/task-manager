import queryClient from '../queryClient'
import { fetchTasks } from '../services/tasks'

export const tasksLoader = async () => {
  return queryClient.ensureQueryData({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })
}
