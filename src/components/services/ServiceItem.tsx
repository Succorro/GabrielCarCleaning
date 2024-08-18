import React from 'react'

const ServiceItem = ({service}) => {
    console.log(service)
  return (
    <div className="w-full px-4">
  <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
    <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
      {/* Image placeholder */}
      <img
        src={service.imageUrl || '/placeholder-image.jpg'}
        alt={service.name}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <span className="mb-2 inline-block rounded-full bg-Teal px-3 py-1 text-md font-medium text-white dark:bg-teal-800 dark:text-teal-100">
        {service.name}
      </span>
      <h2 className="mb-4 text-md font-bold text-gray-800 dark:text-white sm:text-2xl">
        {service.info}
      </h2>
      <div className="mb-6">
        <p className="mb-2 flex items-center text-gray-600 dark:text-gray-300">
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Time: {service.time}
        </p>
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
          {service.additionalInfo}
        </p>
      </div>
      <button className="w-full rounded-lg bg-teal-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-500 dark:hover:bg-teal-600">
        Request an Appointment
      </button>
    </div>
  </div>
</div>
  )
}

export default ServiceItem