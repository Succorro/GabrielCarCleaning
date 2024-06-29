import { useRef } from 'react';
import ServiceMenuItem from './ServiceMenuItem';
import Slider from './Slider';

export interface Service {
    id: number;  
    name: string;  
    info: string;  
    time: string;  
    additionalInfo: string;
}
interface ServiceMenuProps {
    services: Service[];
    selectedService: Service;
    onSelect: (service: Service) => void;
  }
  

const ServiceMenu = ({ services, selectedService, onSelect }: ServiceMenuProps) => {
    return (
      <div className="w-1/3 bg-white shadow-lg p-6 overflow-y-auto relative">
        {services.map((service, index) => (
          <ServiceMenuItem 
            key={service.name}
            service={service}
            isSelected={service.name === selectedService.name}
            onClick={() => onSelect(service)}
            index={index}
          />
        ))}
        <Slider  selectedIndex={selectedService.id - 1} />
      </div>
    );
  };

export default ServiceMenu