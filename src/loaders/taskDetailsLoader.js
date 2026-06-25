import queryClient from '../queryClient'
import { fetchTasksById } from '../services/tasks'

export const taskDetailsLoader = async ({ params }) => {
  return queryClient.ensureQueryData({
    queryKey: ['tasks', params.taskId],
    queryFn: () => fetchTasksById(params.taskId),
  })
}
