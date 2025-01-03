import React from 'react';
import { User, Mail, Award } from 'lucide-react';

const achievements = [
  { title: "Early Bird", description: "Completed 10 morning rides", date: "2024-02-15" },
  { title: "Century Rider", description: "Rode 100km in a week", date: "2024-02-10" },
  { title: "Green Warrior", description: "Saved 50kg of CO₂", date: "2024-02-05" }
];

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-4 rounded-full">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>john.doe@example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold">Achievements</h2>
        </div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
              <p className="text-gray-400 text-xs mt-1">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}