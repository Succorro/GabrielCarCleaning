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
      opacity: isSelected ? 1 : 0.6,
      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
    });
    return (
      <animated.div 
        style={props} 
        onClick={onClick} 
        className={`py-5 px-4 cursor-pointer transition-colors duration-200 ease-in-out
                    ${isSelected ? 'bg-slate-200 text-DTeal' : 'hover:bg-gray-100 text-slate-950'}`}
      >
        {service.name}
      </animated.div>
    );
  };

export default ServiceMenuItem