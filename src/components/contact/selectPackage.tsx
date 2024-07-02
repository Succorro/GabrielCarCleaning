import React, {useState} from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage';

interface HeaderProps {
    setPage: (page: number) => void;
    packge: string;
    setPackage: (packge: string) => void;
  }

const SelectPackage = ({ setPage, packge, setPackage }: HeaderProps) => {
    const options = [
        { id: 'weekend', label: 'Weekend Ready', price: 100 },
        { id: 'standard', label: 'The Standard' , price: 100},
        { id: 'excellence', label: 'Excellence' , price: 100},
        { id: 'cc', label: 'C.C. Special' , price: 100},
        { id: 'Partial', label: 'Partial' , price: 100},
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
            <h2 className='text-4xl text-Teal dark:text-teal-600 h-[20vh] pt-10'>Select a Package</h2>
            <div className="flex flex-col items-start min-h-[40vh]">
                {options.map((option) => (
                    <label
                        key={option.id}
                        className={`
                            px-4 flex items-center py-2 rounded-md text-lg font-medium
                            transition-all duration-200 ease-in-out mt-5 cursor-pointer
                            ${
                                packge === option.id
                                    ? 'bg-teal-50 text-teal-700 dark:text-teal-700 dark:bg-slate-200 border-2 border-teal-700'
                                    : 'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-white border-2 border-transparent hover:bg-gray-200'
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
                            className='mr-2 hidden'
                            style={{backgroundColor: '#274249'}}
                        />
                        <span className="custom-radio mr-2"></span>
                        {option.label}
                         <p className='text-sm text-teal-800'>{option.price}</p>
                    </label>
                ))}
            </div>
            <div className="h-[20vh] flex flex-col justify-end items-center pb-10">
                <div>
                    <Button onClick={() => setPage(1)} className='bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:text-white mr-10'>Previous</Button>
                    <Button onClick={handlePageChange} className='bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:text-white'>Next</Button>
                </div>
                {errorMessage}
            </div>    
        </div>
    )
}

export default SelectPackage