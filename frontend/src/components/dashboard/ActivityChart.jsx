import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', distance: 5 },
  { date: 'Tue', distance: 7 },
  { date: 'Wed', distance: 3 },
  { date: 'Thu', distance: 8 },
  { date: 'Fri', distance: 6 },
  { date: 'Sat', distance: 12 },
  { date: 'Sun', distance: 10 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="distance" stroke="#059669" fill="#059669" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}