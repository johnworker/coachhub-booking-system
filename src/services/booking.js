export const createBooking = d => api.post('/bookings', d)
export const updateBooking = (id,d) => api.put(`/bookings/${id}`, d)
export const deleteBooking = id => api.delete(`/bookings/${id}`)
export const fetchMyBookings = () => api.get('/bookings/me')