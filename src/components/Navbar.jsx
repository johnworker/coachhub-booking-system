// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">FITNESS</Link>
        <div className="space-x-6">
          <Link to="/"      className={pathname==='/'?'font-semibold':''}>Home</Link>
          <Link to="/coaches" className={pathname.startsWith('/coaches')?'font-semibold':''}>Coaches</Link>
          <Link to="/about" className={pathname==='/about'?'font-semibold':''}>About</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </div>
      </div>
    </nav>
  );
}
