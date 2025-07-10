export const fetchCoaches = params => api.get('/coaches', { params })
export const fetchCoachById = id => api.get(`/coaches/${id}`)
