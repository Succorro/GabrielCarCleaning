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
      <animated.div style={props} className="w-full min-h-[70vh] sm:w-2/3 p-8 bg-white dark:bg-slate-200 sm:shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{service.name}</h2>
        <p className="text-gray-600 mb-4">{service.info}</p>
        <p className="text-gray-700 font-semibold mb-2">Time: {service.time}</p>
        <p className="text-gray-500 italic mb-5">{service.additionalInfo}</p>
        <a href="/#contact" className="mt-10 px-4 py-2 bg-DTeal text-white rounded hover:bg-teal-800 transition duration-200">
          Book Now
        </a>
      </animated.div>
    );
  };

export default ServiceDetails