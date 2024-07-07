import React, {useState} from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage';

    interface Package {
        id: string;
        label: string;
        price?: string;
    }

  interface HeaderProps {
    setPage: (page: number) => void;
    packge: string | null;
    setPackage: (packge: Package) => void;
    vehicle: string;
  }

const SelectPackage = ({ setPage, packge, setPackage, vehicle }: HeaderProps) => {
    const options = [
        { id: 'weekend', label: 'Weekend Ready' },
        { id: 'standard', label: 'The Standard' },
        { id: 'excellence', label: 'Excellence' },
        { id: 'cc', label: 'C.C. Special' },
        { id: 'partial', label: 'Partial' },
    ];
    const [errorMessage, setErrorMessage] = useState(<></>)

    const handlePageChange = () => {
        if(packge === null) {
            setErrorMessage(<ErrorMessage label='Please Select a Package'/>)
        } else {
            setPage(3)
        }
    }
    const getPricing = (optionId: string, vehicleType: string) => {
        if (vehicleType === 'compact') {
          switch (optionId) {
            case 'weekend': return '$65';
            case 'standard': return '$170 - 190';
            case 'excellence': return '$650+';
            case 'cc': return '$150 - 200';
            default: return 'Prices Vary';
          }
        } else if (vehicleType === 'coupe') {
          switch (optionId) {
            case 'weekend': return '$75';
            case 'standard': return '$170 - 190';
            case 'excellence': return '$700+';
            case 'cc': return '$250 - 300';
            default: return 'Prices Vary';
          }
        } else if (vehicleType === 'sedan') {
            switch (optionId) {
              case 'weekend': return '$85';
              case 'standard': return '$200-220';
              case 'excellence': return '$800+';
              case 'cc': return '$250 - 300';
              default: return 'Prices Vary';
            }
        } else if (vehicleType === 'smallSuv') {
            switch (optionId) {
              case 'weekend': return '$90';
              case 'standard': return '$250 - 350';
              case 'excellence': return '$1000+';
              case 'cc': return '$250 - 300';
              default: return 'Prices Vary';
            }
        } else if (vehicleType === 'suv') {
            switch (optionId) {
              case 'weekend': return '$100';
              case 'standard': return '$270 - 350';
              case 'excellence': return '$1150+';
              case 'cc': return '$250 - 300';
              default: return 'Prices Vary';
            }
        } else if (vehicleType === 'truck') {
            switch (optionId) {
              case 'weekend': return '$100';
              case 'standard': return '$250-400';
              case 'excellence': return '$1200+';
              case 'cc': return '$250 - 300';
              default: return 'Prices Vary';
            }
        }
        return 'Price not available';
      };

      const handlePackageSelection = (option: typeof options[0]) => {
        const price = getPricing(option.id, vehicle);
        setPackage({ ...option, price });
      };


    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl text-Teal dark:text-DTeal min-h-[15vh] pt-10'>Select a Package</h2>
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
                                    : 'bg-gray-100 text-gray-700 dark:bg-slate-300 dark:text-DTeal border-2 border-transparent hover:bg-gray-200 dark:hover:bg-slate-200 dark:hover:text-teal-700'
                            }
                        `}
                    >
                        <input 
                            type="radio" 
                            id={option.id} 
                            name="package"
                            value={option.id} 
                            checked={packge === option.id}
                            onChange={() => handlePackageSelection(option)}
                            className='mr-2 hidden'
                            style={{backgroundColor: '#274249'}}
                        />
                        <span className="custom-radio mr-2"></span>
                        <div className='flex flex-col items-between justify-end'>
                            <p className='font-semibold text-teal-950'>{option.label}</p>
                            <p className='text-sm text-teal-800'>{getPricing(option.id, vehicle)}</p>    
                        </div>
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