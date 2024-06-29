import React from 'react'

const Services = () => {
  const servicesData = [
    {
      name: 'Weekend Ready',
      info: 'Is a maintenance service, focused on providing a hand wash & wax to the exterior with a lite vacuum & wipe down of the interior. Finished with window cleaning to give your vehicle the love it deserves.',
      time: '1 hour 30 minutes',
      additionalInfo: 'Time varies per vehicle'
    },
    {
      name: 'The Standard',
      info: ' Is an exterior services that gives your vehicle a detailed wash, decontamination with clay bar & a standard 2 phase buff & polish that will help get rid of car wash swirls & 50%-70% of scratches. Topped with a ceramic wax & ceramic boosting spray.',
      time: '6 hours',
      additionalInfo: ' (Exterior windows & tire hydration included, time may vary depending on vehicle condition'
    },
    {
      name: 'Excellence',
      info: 'Combined with “The Standard” but heavily focused on the paint correction to completely eliminate scratches & swirls which after a ceramic coating will be applied (to: paint, trim, exterior windows) to give a 2-5 year protection to the exterior.',
      time: '4-5 days',
      additionalInfo: 'Maintenance services will be offered separately, time may vary depending on vehicle condition'
    },
    {
      name: 'C.C.Special',
      info: ' Is a full interior cleaning in which all cracks & surfaces of the interior will be properly aired & cleaned out. Any carpet & cloth material will be properly steam cleaned & heat extracted if the job requires so.',
      time: '8 hours, allowing for proper drying time',
      additionalInfo: 'Leather conditioner will be applied for leather seating & interior windows will be cleaned, time may vary depending on vehicle condition'
    },
    {
      name: 'PARTIAL',
      info: 'Some clients just want a seat ONLY, headliner ONLY, or headlights ONLY. Please fill out an inquiry under the “Partial” section with provided pictures in order to give a precise quote.',
      time: '1 day or less',
      additionalInfo: 'Service time may vary depending on the service provided.'
    },
  ]
  return (
    <section id='services' className="h-[100vh] flex bg-blue-900 dark:bg-slate-950">
        <div className="w-full py-32 md:py-48">
            <div className='flex justify-center'>
                <h2 className="text-4xl font-bold text-white">Services</h2>
            </div>
            <p>
              “Weekend Ready”
              Is a maintenance service, focused on providing a hand wash & wax to the exterior with a lite vacuum & wipe down of the interior. Finished with window cleaning to give your vehicle the love it deserves.
              Estimated time: 1 hour 30 minutes (most vehicles)
            </p>
            <p>
              “The Standard”
              Is an exterior services that gives your vehicle a detailed wash, decontamination with clay bar & a standard 2 phase buff & polish that will help get rid of car wash swirls & 50%-70% of scratches. Topped with a ceramic wax & ceramic boosting spray. (Exterior windows & tire hydration included)
              Estimated time: 6 hours (most vehicles depending on condition)
            </p>
              “Excellence”
              Combined with “The Standard” but heavily focused on the paint correction to completely eliminate scratches & swirls which after a ceramic coating will be applied (to: paint, trim, exterior windows) to give a 2-5 year protection to the exterior. (Maintenance services will be offered separately.)
              Estimated Time: 4-5 days (most vehicles, depending on condition)
              <p>
              C.C.Special
              Is a full interior cleaning in which all cracks & surfaces of the interior will be properly aired & cleaned out. Any carpet & cloth material will be properly steam cleaned & heat extracted if the job requires so. (Leather conditioner will be applied for leather seating & interior windows will be cleaned)
              Estimated time: 8 hours for drying time (most vehicles depending on condition)
              </p>
              <p>
              “PARTIAL”
              Some clients just want a seat ONLY, headliner ONLY, or headlights ONLY. Please fill out an inquiry under the “Partial” section with provided pictures in order to give a precise quote.
              Estimated time: 1 day or less (depending on service)
              </p>
        </div>
    </section>
  )
}

export default Services