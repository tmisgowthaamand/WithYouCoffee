const DEFAULT_API_BASE_URL = 'http://localhost:4000'

const isProd = import.meta.env.PROD
const ENV = import.meta.env.VITE_API_BASE_URL
export const API_BASE_URL = (ENV && ENV.trim() !== '' ? ENV : (isProd ? '' : DEFAULT_API_BASE_URL)).replace(/\/$/, '')

export const apiUrl = (path = '') => `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
