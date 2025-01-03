import React from 'react';
import { MapPin, Heart, MessageSquare } from 'lucide-react';

export default function RouteCard({ title, author, distance, likes, comments, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">by {author}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{distance}km</span>
        </div>
        <div className="flex justify-between mt-4">
          <button className="flex items-center text-gray-600 hover:text-red-500">
            <Heart className="h-5 w-5 mr-1" />
            {likes}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <MessageSquare className="h-5 w-5 mr-1" />
            {comments}
          </button>
        </div>
      </div>
    </div>
  );
}