import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Map, Users, BarChart2, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bike className="h-8 w-8" />
              <span className="font-bold text-xl">GreenRide</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/route-planner" className="flex items-center space-x-1 hover:text-green-200">
              <Map className="h-5 w-5" />
              <span>Plan Route</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 hover:text-green-200">
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-green-200">
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-green-200">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}