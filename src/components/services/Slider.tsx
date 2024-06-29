import { animated, useSpring } from "react-spring";

const Slider = ({ selectedIndex }) => {
    const props = useSpring({
      top: `${selectedIndex * 50}px`, // Adjust based on item height
    });
  
    return <animated.div style={props} className="slider" />;
  };

export default Slider