import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Service } from './ServiceMenu';

interface ServiceMenuItemProps {
    service: Service;
    isSelected: boolean;
    onClick: () => void;
    index: number
  }

const ServiceMenuItem = ({ service, isSelected, onClick, index }: ServiceMenuItemProps) => {
    const props = useSpring({
      opacity: isSelected ? 1 : 0.8,
      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
    });
    return (
      <animated.div 
        style={props} 
        onClick={onClick} 
        className={`min-w-[110px] py-4 px-3 cursor-pointer transition-colors duration-200 ease-in-out border sm:border-none border-slate-600 rounded-xl sm:rounded-none mx-2 text-center
                    ${isSelected ? 'bg-teal-950 text-white border-black' : 'hover:bg-teal-900 hover:text-white font-bold'}`}
      >
        {service.name}
      </animated.div>
    );
  };

export default ServiceMenuItem