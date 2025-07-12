import api from './api'

// 取得、建立、更新、刪除教練
export const fetchCoaches = params => api.get('/coaches', { params })
export const fetchCoachById = id => api.get(`/coaches/${id}`)
export const createCoach = data => api.post('/coaches', data)
export const updateCoach = (id, data) => api.put(`/coaches/${id}`, data)
export const deleteCoach = id => api.delete(`/coaches/${id}`)
