import { useState } from 'react';
import ServiceMenu from './ServiceMenu';
import ServiceDetails from './ServiceDetails';
import ServiceItem from './ServiceItem';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Weekend Ready',
      info: 'Is a maintenance service, focused on providing a hand wash & wax to the exterior with a lite vacuum & wipe down of the interior. Finished with window cleaning to give your vehicle the love it deserves.',
      time: '1 hour 30 minutes',
      additionalInfo: 'Time varies per vehicle'
    },
    {
      id: 2,
      name: 'The Standard',
      info: ' Is an exterior services that gives your vehicle a detailed wash, decontamination with clay bar & a standard 2 phase buff & polish that will help get rid of car wash swirls & 50%-70% of scratches. Topped with a ceramic wax & ceramic boosting spray.',
      time: '6 hours',
      additionalInfo: 'Exterior windows & tire hydration included, time may vary depending on vehicle condition'
    },
    {
      id: 3,
      name: 'Excellence',
      info: 'Combined with “The Standard” but heavily focused on the paint correction to completely eliminate scratches & swirls which after a ceramic coating will be applied (to: paint, trim, exterior windows) to give a 2-5 year protection to the exterior.',
      time: '4-5 days',
      additionalInfo: 'Maintenance services will be offered separately, time may vary depending on vehicle condition'
    },
    {
      id: 4,
      name: 'C.C. Special',
      info: ' Is a full interior cleaning in which all cracks & surfaces of the interior will be properly aired & cleaned out. Any carpet & cloth material will be properly steam cleaned & heat extracted if the job requires so.',
      time: '8 hours, allowing for proper drying time',
      additionalInfo: 'Leather conditioner will be applied for leather seating & interior windows will be cleaned, time may vary depending on vehicle condition'
    },
    {
      id: 5,
      name: 'Partial',
      info: 'Some clients just want a seat ONLY, headliner ONLY, or headlights ONLY. Please fill out an inquiry under the “Additional Information” section with provided pictures in order to give a precise quote.',
      time: '1 day or less',
      additionalInfo: 'Service time may vary depending on the service provided.'
    },
  ]
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  return (
    <section id='services' className="min-h-[100vh] flex flex-col bg-white dark:bg-slate-400 py-10">
        <div className="w-full py-20 md:py-40">
            <div className='flex justify-center'>
                <h2 className="text-4xl font-semibold text-Teal dark:text-DTeal">Services</h2>
            </div>
        </div>
        <div className="flex flex-col xl:grid xl:grid-cols-2 mx-3 md:mx-10">
          {servicesData.map((service) => {
            return (
              <ServiceItem key={service.id} service={service}/>
            )
          })}
        </div>
    </section>
  )
}

export default Services