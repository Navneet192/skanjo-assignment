import React from 'react';
import { Eye, Circle } from 'lucide-react';

const CVAnalysisDashboard = () => {
  const candidates = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      score: 95,
      color: "bg-green-500",
      textColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Mike Chen",
      role: "Full Stack Developer",
      score: 88,
      color: "bg-blue-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Alex Rivera",
      role: "UI/UX Designer",
      score: 92,
      color: "bg-purple-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="relative w-fit">
      {/* Top-right Brain circle */}
      <div className="absolute -top-5 -right-5 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Bottom-left Eye icon */}
      <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
        <Eye className="text-white w-5 h-5" />
      </div>

      {/* Card Body */}
      <div className="bg-white rounded-2xl shadow-xl p-6  w-[450px] h-[420px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">CV Analysis</h3>
          <div className="flex items-center space-x-2">
            <Circle className="h-3 w-3 text-green-500 fill-current" />
            <span className="text-sm text-gray-600">AI Active</span>
          </div>
        </div>

        <div className="space-y-4">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg border border-gray-100 ${candidate.bgColor}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-1 h-12 ${candidate.color} rounded-full`}></div>
                <div>
                  <div className="font-medium text-gray-900">{candidate.name}</div>
                  <div className="text-sm text-gray-500">{candidate.role}</div>
                </div>
              </div>
              <div className={`text-lg font-bold ${candidate.textColor}`}>
                {candidate.score}%
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Candidates Screened</span>
          </div>
          <span className="text-lg font-bold text-gray-900">1,247</span>
        </div>
      </div>
    </div>
  );
};

export default CVAnalysisDashboard;