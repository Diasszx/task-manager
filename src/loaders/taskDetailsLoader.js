import { fetchTasksById } from '../services/tasks'

export const taskDetailsLoader = async ({ params }) => {
  return fetchTasksById(params.taskId)
}
