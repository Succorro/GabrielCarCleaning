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
        { id: 'compact', label: 'Compact', img: '/sport-car.png' },
        { id: 'coupe', label: 'Coupe', img: '/sport-car.png' },
        { id: 'sedan', label: 'Sedan', img: '/sport-car.png' },
        { id: 'smallSuv', label: 'Small SUV', img: '/car.png' },
        { id: 'suv', label: 'SUV', img: '/car.png' },
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
    <div className='flex flex-col items-center'>
        <h2 className='text-4xl text-Teal dark:text-DTeal h-[20vh] pt-10'>Select a Car</h2>
        <div className="flex space-x-10 h-[40vh] items-center">
            {options.map((option) => (
                <button
                key={option.id}
                className={`
                    px-4 py-2 rounded-md text-sm font-medium
                    transition-all duration-200 ease-in-out max-h-[30vh]
                    ${
                    vehicle === option.id
                        ? 'bg-teal-50 text-teal-700 dark:bg-slate-200 border-2 border-teal-600'
                        : 'bg-gray-100 dark:bg-slate-300 dark:text-DTeal text-gray-700 border-2 border-transparent hover:bg-gray-200 dark:hover:bg-slate-200 dark:hover:text-teal-700'
                    }
                `}
                onClick={() => setVehicle(option.id)}
                >
                    <img src={option.img} alt="icon" />
                    {option.label}
                </button>
            ))}
        </div>
        <div className="h-[20vh] flex flex-col justify-end items-center pb-10">
            <Button onClick={handlePageChange} className=' bg-blue-700 dark:bg-blue-600 dark:text-white hover:bg-blue-800'>Next </Button>
            {errorMessage}
        </div>
    </div>
  )
}

export default SelectCar
