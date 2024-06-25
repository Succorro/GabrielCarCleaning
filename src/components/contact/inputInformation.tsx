import React from 'react'
import { Button } from '../ui/button'

const InputInformation = ({setPage, userInfo, setUserInfo}) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserInfo(prevInfo => ({
        ...prevInfo,
        [name]: value
      }));
    };
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-4xl text-blue-800 mt-4 mb-10'>Contact Information</h2>
        <form className="flex flex-col">
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="additionalInfo"
                    placeholder="Additional Information"
                    name="additionalInfo"
                    value={userInfo.additionalInfo}
                    onChange={handleChange}
                    rows="4"
                ></textarea>
            </div>
        </form>
        <div>
            <Button onClick={()=> setPage(2)} className='hover:bg-blue-800 bg-blue-700 mr-10'>Previous </Button>
            <Button className='bg-green-700 hover:bg-green-900 '>Submit</Button>
        </div>
    </div>
  )
}

export default InputInformation