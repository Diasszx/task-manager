import { apiFetch } from './api'

export const fetchTasks = async () => {
  return apiFetch('/tasks')
}

export const fetchTasksById = async (taskId) => {
  return apiFetch(`/tasks/${taskId}`)
}

export const createTask = async (task) => {
  return apiFetch('/tasks', { method: 'POST', data: task })
}

export const deleteTask = async (taskId) => {
  return apiFetch(`/tasks/${taskId}`, { method: 'DELETE' })
}

export const updateTask = async (taskId, task) => {
  return apiFetch(`/tasks/${taskId}`, {
    method: 'PATCH',
    data: task,
  })
}
