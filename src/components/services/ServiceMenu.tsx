import ServiceMenuItem from './ServiceMenuItem';

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
      <div className="flex flex-row sm:flex-col w-full sm:w-1/3 bg-white dark:bg-slate-300 sm:shadow-lg p-6 sm:overflow-y-auto overflow-x-auto relative">
        {services.map((service, index) => (
          <ServiceMenuItem 
            key={service.name}
            service={service}
            isSelected={service.name === selectedService.name}
            onClick={() => onSelect(service)}
            index={index}
          />
        ))}
      </div>
    );
  };

export default ServiceMenu