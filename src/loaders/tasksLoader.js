import { taskQueryKeys } from '../keys/queries'
import queryClient from '../queryClient'
import { fetchTasks } from '../services/tasks'

export const tasksLoader = async () => {
  return queryClient.ensureQueryData({
    queryKey: taskQueryKeys.getAll(),
    queryFn: fetchTasks,
  })
}
