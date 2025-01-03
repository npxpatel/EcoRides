import React from 'react';
import RouteCard from '../components/community/RouteCard';

const dummyRoutes = [
  {
    title: "Scenic Park Loop",
    author: "Sarah Chen",
    distance: 12.5,
    likes: 45,
    comments: 8,
    image: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "City Heritage Trail",
    author: "Mike Johnson",
    distance: 8.3,
    likes: 32,
    comments: 5,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Riverside Adventure",
    author: "Emma Wilson",
    distance: 15.7,
    likes: 67,
    comments: 12,
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community Routes</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Share Your Route
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyRoutes.map((route, index) => (
          <RouteCard key={index} {...route} />
        ))}
      </div>
    </div>
  );
}