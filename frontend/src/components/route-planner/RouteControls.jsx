import React, { useState } from 'react';
import { MapPin, Navigation, Save, Wind } from 'lucide-react';
import PlacesAutocomplete from './PlacesAutocomplete';

export default function RouteControls() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold mb-4">Route Controls</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Point</label>
          <PlacesAutocomplete
            value={startLocation}
            onChange={setStartLocation}
            placeholder="Enter start location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <PlacesAutocomplete
            value={endLocation}
            onChange={setEndLocation}
            placeholder="Enter destination"
          />
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          <Navigation className="h-5 w-5" />
          <span>Calculate Route</span>
        </button>
        
        <button className="w-full flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200">
          <Wind className="h-5 w-5" />
          <span>Check Air Quality</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50">
          <Save className="h-5 w-5" />
          <span>Save Route</span>
        </button>
      </div>
    </div>
  );
}