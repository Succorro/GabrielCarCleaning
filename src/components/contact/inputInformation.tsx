import React from 'react'
import { Button } from '../ui/button'
import ErrorMessage from './errorMessage'

interface UserInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    additionalInfo: string;
  }
  
  interface Errors {
    [key: string]: string | null;
  }

interface InputInformationProps {
    setPage: (page: number) => void;
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    onSubmit: () => void;
    errors: Errors;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  }

const InputInformation = ({setPage, userInfo, setUserInfo, onSubmit, errors, setErrors}: InputInformationProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
    // Clear the error for this field when the user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  return (
    <div className='flex flex-col items-center w-full h-full' >
      <h2 className='text-4xl text-blue-800 dark:text-blue-600 pt-10 pb-5 h-[25%]'>Contact Information</h2>
      <form className="flex flex-col h-[55%]">
        <div className="mb-4">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <ErrorMessage label={errors.firstName} />}
        </div>
        <div className="mb-4">
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
                id="lastName"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <ErrorMessage label={errors.lastName} />}
            </div>
            <div className="mb-4">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
                    id="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <ErrorMessage label={errors.phoneNumber} />}
            </div>
            <div className="mb-4">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                />
                {errors.email && <ErrorMessage label={errors.email} />}
            </div>
            <div className="mb-6">
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="additionalInfo"
                    placeholder="Additional Information"
                    name="additionalInfo"
                    value={userInfo.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                ></textarea>
            </div>
      </form>
      <div className='h-[20%] flex flex-col justify-end items-center pb-10'>
        <div>
          <Button onClick={()=> setPage(2)} className='hover:bg-blue-800 bg-blue-700 dark:bg-blue-600 dark:text-white mr-10'>Previous </Button>
          <Button onClick={onSubmit} className='bg-green-700 hover:bg-green-900 dark:text-white dark:bg-green-600'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default InputInformation