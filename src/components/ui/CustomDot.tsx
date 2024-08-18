import React from 'react';

interface CustomDotProps {
  onClick?: () => void;
  active?: boolean;
  index?: number;
  carouselState?: any; // You can define a more specific type if needed
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active, index, carouselState }) => {
  return (
    <button
      className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
        active ? 'bg-teal-500 w-6' : 'bg-gray-300'
      }`}
      onClick={onClick}
    />
  );
};

export default CustomDot;