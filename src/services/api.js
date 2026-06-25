const API_URL = import.meta.env.VITE_API_BASE_URL
import axios from 'axios'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await api({ url: endpoint, ...options })
    return response.data
  } catch {
    throw new Error('Erro na requisição')
  }
}
