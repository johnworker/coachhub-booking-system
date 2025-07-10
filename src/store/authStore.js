import create from 'zustand'
import { fetchProfile } from '../services/auth'

export const useAuthStore = create(set => ({
  token: localStorage.getItem('token') || '',
  profile: null,

  setToken: tk => {
    localStorage.setItem('token', tk)
    set({ token: tk })
  },
  setProfile: pf => set({ profile: pf }),
  logout: () => {
    localStorage.removeItem('token')
    set({ token: '', profile: null })
  },
  loadProfile: async () => {
    try {
      const res = await fetchProfile()
      set({ profile: res.data })
    } catch {
      set({ token: '', profile: null })
    }
  }
}))
