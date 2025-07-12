import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function BookingChart({ data }) {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="coach"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      >
        {data.map((_, idx) => (
          <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
