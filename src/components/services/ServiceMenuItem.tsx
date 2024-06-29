import React from 'react'
import { useSpring, animated } from 'react-spring';

const ServiceMenuItem = ({ service, isSelected, onClick, index }) => {
    const props = useSpring({
      opacity: isSelected ? 1 : 0.6,
      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
    });
  
    return (
      <animated.div style={props} onClick={onClick} className="service-menu-item">
        {service.name}
      </animated.div>
    );
  };

export default ServiceMenuItem