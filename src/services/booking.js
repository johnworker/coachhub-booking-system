import api from './api'

// 我的預約 與 全部預約 (Admin)
export const fetchMyBookings = () => api.get('/bookings/me')
export const fetchAllBookings = () => api.get('/bookings')
export const createBooking = d => api.post('/bookings', d)
export const updateBooking = (id, d) => api.put(`/bookings/${id}`, d)
export const deleteBooking = id => api.delete(`/bookings/${id}`)
// Admin 修改預約狀態
export const updateBookingStatus = (id, status) =>
  api.patch(`/bookings/${id}/status`, { status })
