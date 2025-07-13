import React from 'react';
import { useFeaturedCoaches } from '../../query/featuredCoaches';
import CoachCard from '../../components/CoachCard';
import HowItWorks from '../../components/HowItWorks';
import Loading from '../../components/Loading';

export default function Home() {
  // 1. 拿取限量 4 位教練
  const { data: coaches, isLoading, error } = useFeaturedCoaches();

  return (
    <div>
      {/* Hero 區 */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/images/hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">ACHIEVE YOUR FITNESS GOALS</h1>
          <a
            href="#coaches"
            className="bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Featured Coaches */}
      <section id="coaches" className="container mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Coaches</h2>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">無法載入教練，請稍後再試。</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map(coach => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="container mx-auto mt-16 px-4 pb-16">
        <HowItWorks />
      </section>
    </div>
  );
}
