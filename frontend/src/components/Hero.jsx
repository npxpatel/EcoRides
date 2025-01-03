import React from 'react';
import { Bike, Wind, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Ride Green,</span>
            <span className="block text-green-600">Live Clean</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the community of eco-conscious cyclists making a difference. 
            Plan your rides, track your impact, and breathe better air together.
          </p>
          
          <div className="mt-10 flex justify-center space-x-6">
            <Link to="/route-planner" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Plan Your Ride
              <Bike className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/air-quality" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
              Check Air Quality
              <Wind className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Bike className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Route Planning</h3>
            <p className="mt-2 text-base text-gray-500">
              Find the safest and most eco-friendly routes for your daily commute.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Wind className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Air Quality</h3>
            <p className="mt-2 text-base text-gray-500">
              Stay informed about air quality along your route.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Community Impact</h3>
            <p className="mt-2 text-base text-gray-500">
              Join others in making a positive environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}