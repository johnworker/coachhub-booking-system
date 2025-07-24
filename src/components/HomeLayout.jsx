import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 子路由 (Home / Login / Register) 都渲染在這 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
