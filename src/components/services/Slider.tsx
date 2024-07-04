import { animated, useSpring } from "react-spring";
interface SliderProps {
    selectedIndex: number 
}
const Slider = ({ selectedIndex }: SliderProps) => {
    const props = useSpring({
      top: `${selectedIndex * 80 - 10}px`, // Adjust based on item height and padding
      config: { tension: 300, friction: 30 },
    });
  console.log(selectedIndex)
    return (
      <animated.div 
        style={props} 
        className="absolute left-0 w-1 bg-DTeal h-12 transition-all duration-200 ease-in-out" 
      />
    );
  };
  

export default Slider