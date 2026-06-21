import { apiFetch } from './api'

export const fetchTasks = async () => {
  return apiFetch('/tasks')
}

export const fetchTasksById = async (taskId) => {
  return apiFetch(`/tasks/${taskId}`)
}

export const createTask = async (task) => {
  return apiFetch('/tasks', { method: 'POST', body: JSON.stringify(task) })
}

export const deleteTask = async (taskId) => {
  return apiFetch(`/tasks/${taskId}`, { method: 'DELETE' })
}

export const updateTask = async (taskId, updates) => {
  return apiFetch(`/tasks/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  })
}
