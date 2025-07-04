import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: typeof LucideIcon;
  text: string;
  color: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon: Icon, text, color }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={`p-2 rounded-full ${color}`}>
        <Icon className="h-4 w-4 text-white" />
      </div>
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
};

export default FeatureIcon;