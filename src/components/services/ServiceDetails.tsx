import { useSpring, animated } from "react-spring";
import { Service } from "./ServiceMenu";
interface ServiceDetailsProps {
    service: Service
  }

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      reset: true,
    });
  
    return (
      <animated.div style={props} className="w-2/3 p-8 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{service.name}</h2>
        <p className="text-gray-600 mb-4">{service.info}</p>
        <p className="text-gray-700 font-semibold mb-2">Time: {service.time}</p>
        <p className="text-gray-500 italic">{service.additionalInfo}</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          Book Now
        </button>
      </animated.div>
    );
  };

export default ServiceDetails