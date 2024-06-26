import React, {useState} from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage';

const SelectPackage = ({ setPage, packge, setPackage }) => {
    const options = [
        { id: 'interior', label: 'Interior' },
        { id: 'exterior', label: 'Exterior' },
        { id: 'full', label: 'Full Package' },
    ];
    const [errorMessage, setErrorMessage] = useState(<></>)
    const handlePageChange = () => {
        if(packge === '') {
            setErrorMessage(<ErrorMessage label='Please Select a Package'/>)
        } else {
            setPage(3)
        }
    }
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl text-blue-800 h-[20vh] pt-10'>Select a Package</h2>
            <div className="flex flex-col items-start h-[40vh]">
                {options.map((option) => (
                    <label
                        key={option.id}
                        className={`
                            px-4 py-2 rounded-md text-lg font-medium
                            transition-all duration-200 ease-in-out mt-5 cursor-pointer
                            ${
                                packge === option.id
                                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-700'
                                    : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                            }
                        `}
                    >
                        <input 
                            type="radio" 
                            id={option.id} 
                            name="package"
                            value={option.id} 
                            checked={packge === option.id}
                            onChange={() => setPackage(option.id)}
                            className='mr-2'
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            <div className="h-[20vh] flex flex-col justify-end items-center pb-10">
                <div>
                    <Button onClick={() => setPage(1)} className='bg-blue-700 hover:bg-blue-800 mr-10'>Previous</Button>
                    <Button onClick={handlePageChange} className='bg-blue-700 hover:bg-blue-800'>Next</Button>
                </div>
                {errorMessage}
            </div>    
        </div>
    )
}

export default SelectPackage