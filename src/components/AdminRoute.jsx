import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function AdminRoute({ children }) {
  const { token, profile } = useAuthStore()
  if (!token) return <Navigate to="/login" replace />
  if (profile?.role !== 'admin') return <Navigate to="/" replace />
  return children
}
