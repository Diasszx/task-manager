import { apiFetch } from './api'

export const fetchTasks = () => {
  apiFetch('/tasks')
}

export const fetchTasksById = (taskId) => {
  apiFetch(`/tasks/${taskId}`)
}

export const createTask = (task) => {
  apiFetch('/tasks', { method: 'POST', body: JSON.stringify(task) })
}

export const deleteTask = (taskId) => {
  apiFetch(`/tasks/${taskId}`, { method: 'DELETE' })
}
