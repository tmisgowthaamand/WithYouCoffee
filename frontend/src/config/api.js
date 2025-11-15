const DEFAULT_API_BASE_URL = 'http://localhost:4000'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || DEFAULT_API_BASE_URL

export const apiUrl = (path = '') => `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
