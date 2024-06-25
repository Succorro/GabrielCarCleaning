import React from 'react'
import { Button } from '../ui/button'

const SelectCar = ({setPage, vehicle, setVehicle}) => {
    const options = [
        { id: 'sedan', label: 'Sedan', img: '/sport-car.png' },
        { id: 'suv', label: 'SUV', img: '/car.png' },
        { id: 'truck', label: 'Truck', img: '/pick-up-truck.png' },
      ];
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-4xl text-blue-800 mb-20'>Select a Car</h2>
        <div className="flex space-x-10 mb-36">
            {options.map((option) => (
                <button
                key={option.id}
                className={`
                    px-4 py-2 rounded-md text-sm font-medium
                    transition-all duration-200 ease-in-out
                    ${
                    vehicle === option.id
                        ? 'bg-blue-100 text-blue-700 border-2 border-blue-700'
                        : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                    }
                `}
                onClick={() => setVehicle(option.id)}
                >
                    <img src={option.img} alt="icon" />
                    {option.label}
                </button>
            ))}
        </div>
        <Button onClick={()=> setPage(2)} className=' bg-blue-700 hover:bg-blue-800 '>Next </Button>
    </div>
  )
}

export default SelectCar
