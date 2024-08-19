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
      className={`w-7 h-7 mx-1 rounded-full transition-all duration-300 border border-4 border-white ${
        active ? 'bg-white' : 'bg-none'
      }`}
      onClick={onClick}
    />
  );
};

export default CustomDot;