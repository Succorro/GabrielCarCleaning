import ServiceMenuItem from './ServiceMenuItem';
import Slider from './Slider';

const ServiceMenu = ({ services, selectedService, onSelect }) => {
    return (
      <div className="service-menu">
        {services.map((service, index) => (
          <ServiceMenuItem 
            key={service.name}
            service={service}
            isSelected={service === selectedService}
            onClick={() => onSelect(service)}
            index={index}
          />
        ))}
        <Slider selectedIndex={services.indexOf(selectedService)} />
      </div>
    );
  };

export default ServiceMenu