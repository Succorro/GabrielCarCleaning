import ServiceItem from './ServiceItem';

const Services = () => {
  const servicesData = [
    { 
      id: 1,
      images: [''],
      name: 'Weekend Ready',
      info: 'Is a maintenance service, focused on providing a hand wash & wax to the exterior with a light vacuum & wipe down of the interior. Finished with window cleaning to give your vehicle the love it deserves.',
      time: '1 hour 30 minutes',
      additionalInfo: 'Time varies per vehicle'
    },
    {
      id: 2,
      images: [''],
      name: 'The Standard',
      info: ' Is an exterior services that gives your vehicle a detailed wash, decontamination with clay bar & a standard 2 phase buff & polish that will help get rid of car wash swirls & 50%-70% of scratches. Topped with a ceramic wax & ceramic boosting spray.',
      time: '6 hours',
      additionalInfo: 'Exterior windows & tire hydration included, time may vary depending on vehicle condition'
    },
    {
      id: 3,
      images: ['GCC-Scratch.JPG','GCC-NoScratch.JPG'],
      name: 'Excellence',
      info: 'Combined with “The Standard” but heavily focused on the paint correction to completely eliminate scratches & swirls which after a ceramic coating will be applied (to: paint, trim, exterior windows) to give a 2-5 year protection to the exterior.',
      time: '4-5 days',
      additionalInfo: 'Maintenance services will be offered separately, time may vary depending on vehicle condition'
    },
    {
      id: 4,
      images: ['GCC-DirtySeats2.JPG','GCC-CleanSeats2.JPG'],
      name: 'C.C. Special',
      info: ' Is a full interior cleaning in which all cracks & surfaces of the interior will be properly aired & cleaned out. Any carpet & cloth material will be properly steam cleaned & heat extracted if the job requires so.',
      time: '8 hours, allowing for proper drying time',
      additionalInfo: 'Leather conditioner will be applied for leather seating & interior windows will be cleaned, time may vary depending on vehicle condition'
    },
    {
      id: 5,
      images: ['GCC-DirtyLights.jpg','GCC-CleanLights.jpg'],
      name: 'Partial',
      info: 'Some clients just want a seat ONLY, headliner ONLY, or headlights ONLY. Please fill out an inquiry under the “Additional Information” section with provided pictures in order to give a precise quote.',
      time: '1 day or less',
      additionalInfo: 'Service time may vary depending on the service provided.'
    },
  ]
  return (
    <section id='services' className="min-h-[100vh] bg-white dark:bg-slate-400 dark:text-white text-Teal pb-10 pt-10">
      <div className='mx-4 flex flex-wrap'>
        <div className='w-full px-4'>
            <div className='mx-auto  max-w-[510px] text-start'>
                <h2 className='pb-3 text-4xl font-semibold text-teal-700 dark:text-DTeal sm:text-4xl md:leading-[1.2] md:text-[40px]'>
                    Services
                </h2>
                <div className='w-full border border-1 border-teal-600 mb-10'></div>
            </div>
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