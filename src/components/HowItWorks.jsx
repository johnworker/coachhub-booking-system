import React from 'react';

const steps = [
  {
    icon: '/src/assets/images/icons/choose-coach.svg',
    title: 'Choose a Coach',
    desc: 'Select a coach online'
  },
  {
    icon: '/src/assets/images/icons/select-date.svg',
    title: 'Select Date and Time',
    desc: 'Pick your preferred slot'
  },
  {
    icon: '/src/assets/images/icons/book.svg',
    title: 'Book Appointment',
    desc: 'Confirm your booking'
  }
];

export default function HowItWorks() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-white rounded-lg p-6 text-center shadow">
            <img src={s.icon} alt={s.title} className="mx-auto h-12" />
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
