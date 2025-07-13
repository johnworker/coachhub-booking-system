// src/router/index.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminRoute from '../components/AdminRoute';

/** 懶加載頁面元件 */
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const InstructorList = lazy(() => import('../pages/Instructors/InstructorList'));
const InstructorDetail = lazy(() => import('../pages/Instructors/InstructorDetail'));
const Booking = lazy(() => import('../pages/Booking/Booking'));
const MyBookings = lazy(() => import('../pages/MyBookings/MyBookings'));
const Settings = lazy(() => import('../pages/Settings/Settings'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'));
const CoachesMgnt = lazy(() => import('../pages/Admin/CoachesMgnt'));
const BookingsMgnt = lazy(() => import('../pages/Admin/BookingsMgnt'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRouter() {
  return (
    <Routes>
      {/* 公開路由 */}
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />

      {/* 會員專區 (需登入) */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/coaches"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <InstructorList />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/coaches/:id"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <InstructorDetail />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/booking/:coachId"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Booking />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <MyBookings />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          </ProtectedRoute>
        }
      />

      {/* 管理後台 (需 admin) */}
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          </AdminRoute>
        }
      >
        <Route
          path="coaches"
          element={
            <Suspense fallback={<Loading />}>
              <CoachesMgnt />
            </Suspense>
          }
        />
        <Route
          path="bookings"
          element={
            <Suspense fallback={<Loading />}>
              <BookingsMgnt />
            </Suspense>
          }
        />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}
