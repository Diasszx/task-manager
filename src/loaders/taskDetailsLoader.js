import { taskQueryKeys } from '../keys/queries'
import queryClient from '../queryClient'
import { fetchTasksById } from '../services/tasks'

export const taskDetailsLoader = async ({ params }) => {
  return queryClient.ensureQueryData({
    queryKey: taskQueryKeys.getOne(params.taskId),
    queryFn: () => fetchTasksById(params.taskId),
  })
}
