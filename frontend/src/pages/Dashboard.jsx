import React from 'react';
import { Bike, Wind, Leaf } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import ActivityChart from '../components/dashboard/ActivityChart';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Distance" 
          value="156 km"
          icon={Bike}
          color="bg-green-600"
        />
        <StatsCard 
          title="CO₂ Saved" 
          value="28.5 kg"
          icon={Leaf}
          color="bg-emerald-600"
        />
        <StatsCard 
          title="Air Quality Impact" 
          value="Good"
          icon={Wind}
          color="bg-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ActivityChart />
      </div>
    </div>
  );
}