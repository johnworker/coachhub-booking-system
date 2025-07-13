import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import AppRouter from './router/index.jsx';

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main className="container mx-auto py-6">
        {/* 路由懶加載 */}
        <Suspense fallback={<Loading />}>
          <AppRouter />
        </Suspense>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
