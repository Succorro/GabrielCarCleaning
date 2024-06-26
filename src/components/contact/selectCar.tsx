import React, {useState} from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage';

const SelectCar = ({setPage, vehicle, setVehicle}) => {
    const options = [
        { id: 'sedan', label: 'Sedan', img: '/sport-car.png' },
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
        <h2 className='text-4xl text-blue-800 h-[20vh] pt-10'>Select a Car</h2>
        <div className="flex space-x-10 h-[40vh]">
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
        <div className="h-[20vh] flex flex-col justify-end items-center pb-10">
            <Button onClick={handlePageChange} className=' bg-blue-700 hover:bg-blue-800'>Next </Button>
            {errorMessage}
        </div>
    </div>
  )
}

export default SelectCar
