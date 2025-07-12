// src/services/auth.js
import api from './api'

/**
 * 取得目前使用者資訊
 */
export async function fetchProfile() {
  const res = await api.get('/auth/profile')
  return res.data
}

// 其他函式也請確定都是 named export：
export async function login(credentials) {
  const res = await api.post('/auth/login', credentials)
  return res.data
}

export async function register(userInfo) {
  const res = await api.post('/auth/register', userInfo)
  return res.data
}

// 如果你有 updateProfile、changePassword，也一併用 export function
export async function updateProfile(profileData) {
  const res = await api.put('/auth/profile', profileData)
  return res.data
}

export async function changePassword({ oldPassword, newPassword }) {
  const res = await api.put('/auth/password', { oldPassword, newPassword })
  return res.data
}
