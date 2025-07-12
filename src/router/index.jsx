import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from '../components/Loading'

/** 動態載入各頁面 */
const Home = lazy(() => import('../pages/Home/Home'))
const Login = lazy(() => import('../pages/Auth/Login'))
const Register = lazy(() => import('../pages/Auth/Register'))
const InstructorList = lazy(() => import('../pages/Instructors/InstructorList'))
const InstructorDetail = lazy(() => import('../pages/Instructors/InstructorDetail'))
const Booking = lazy(() => import('../pages/Booking/Booking'))
const MyBookings = lazy(() => import('../pages/MyBookings/MyBookings'))
const Settings = lazy(() => import('../pages/Settings/Settings'))
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'))
const CoachesMgnt = lazy(() => import('../pages/Admin/CoachesMgnt'))
const BookingsMgnt = lazy(() => import('../pages/Admin/BookingsMgnt'))
const NotFound = lazy(() => import('../pages/NotFound'))

const router = createBrowserRouter([
  // 公開路由
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    )
  },

  // 會員路由
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/coaches',
    element: (
      <Suspense fallback={<Loading />}>
        <InstructorList />
      </Suspense>
    )
  },
  {
    path: '/coaches/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <InstructorDetail />
      </Suspense>
    )
  },
  {
    path: '/booking/:coachId',
    element: (
      <Suspense fallback={<Loading />}>
        <Booking />
      </Suspense>
    )
  },
  {
    path: '/my-bookings',
    element: (
      <Suspense fallback={<Loading />}>
        <MyBookings />
      </Suspense>
    )
  },
  {
    path: '/settings',
    element: (
      <Suspense fallback={<Loading />}>
        <Settings />
      </Suspense>
    )
  },

  // 管理後台
  {
    path: '/admin',
    element: (
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: 'coaches',
        element: (
          <Suspense fallback={<Loading />}>
            <CoachesMgnt />
          </Suspense>
        )
      },
      {
        path: 'bookings',
        element: (
          <Suspense fallback={<Loading />}>
            <BookingsMgnt />
          </Suspense>
        )
      }
    ]
  },

  // 404
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    )
  }
])

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* 這裡放所有 Route */}
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      {/* … */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}