import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import router from './router'
import AppRouter from './router';
import Loading from './components/Loading';  // ← 加上這行import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'


import ErrorBoundary from './components/ErrorBoundary';
// ...
<ErrorBoundary>
  <Navbar />
  <main>…</main>
  <Footer />
</ErrorBoundary>


export default function App() {
  return (
    <>
      <Navbar />   {/* 這裡的 Link 現在有 RouterContext 了 */}
      <main className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ... */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}