import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/reset.css'
import './assets/css/index.css'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 啟動時嘗試讀取 profile
useAuthStore.getState().loadProfile()

root.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>
)
