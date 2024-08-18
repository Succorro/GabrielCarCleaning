import React, {useState} from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage';

interface HeaderProps {
    setPage: (page: number) => void;
    vehicle: string;
    setVehicle: (vehicle: string) => void;
  }

const SelectCar = ({setPage, vehicle, setVehicle}: HeaderProps) => {
    const options = [
        { id: 'compact', label: 'Compact', img: '/CompactCar.png', style: 'w-[70px] h-[80px] sm:h-[92px]  sm:w-[92px] object-cover' },
        { id: 'coupe', label: 'Coupe', img: '/sport-car.png' },
        { id: 'sedan', label: 'Sedan', img: '/sedan.png' },
        { id: 'smallSuv', label: ' SUV', img: '/jeep.png' },
        { id: 'suv', label: 'Full-Sized SUV', img: '/suv.png' },
        { id: 'truck', label: 'Truck', img: '/pick-up-truck.png' },
      ];
    const [errorMessage, setErrorMessage] = useState(<></>)
    const handlePageChange = () => {
        if(vehicle === '') {
            setErrorMessage(<ErrorMessage label='Please Select a Vehicle'/>)
        } else {
            setPage(2)
        }
    }
  return (
    <div className='flex flex-col items-center text-start'>
        <h2 className='text-4xl text-teal-950 dark:text-DTeal h-[20vh] pt-10'>Select a Car</h2>
        <div className="flex grid grid-cols-3 gap-5 min-h-[40vh] items-center">
            {options.map((option) => (
                <button
                key={option.id}
                className={`
                    px-4 py-2 rounded-md text-sm font-medium
                    transition-all duration-200 ease-in-out w-28
                    ${
                    vehicle === option.id
                        ? 'bg-teal-700 text-slate-100 dark:bg-slate-200 border-2 border-teal-700 transition-colors duration-300'
                        : 'bg-gray-100 dark:bg-slate-300 dark:text-DTeal text-gray-800 border-2 border-transparent hover:bg-teal-600 hover:text-slate-100 dark:hover:bg-slate-200 dark:hover:text-teal-700 transition-colors duration-300'
                    }
                `}
                onClick={() => setVehicle(option.id)}
                >
                    <img className={option.style} src={option.img} alt="icon" />
                    <p className='font-bold'>{option.label}</p>
                </button>
            ))}
        </div>
        <div className="h-[20vh] flex flex-col justify-end items-center pb-3">
            <Button onClick={handlePageChange} className=' bg-teal-600 dark:bg-blue-600 dark:text-white hover:bg-teal-800 transition-colors duration-300'>Next </Button>
            {errorMessage}
        </div>
    </div>
  )
}

export default SelectCar
