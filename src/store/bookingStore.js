import { create } from 'zustand'

export const useBookingStore = create(set => ({
  bookings: [],
  setBookings: bs => set({ bookings: bs })
}))
