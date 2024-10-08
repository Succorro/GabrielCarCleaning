import { useState } from 'react'
import SelectCar from './selectCar'
import SelectPackage from './selectPackage'
import InputInformation from './inputInformation'
import ThankYouMessage from './thanks'

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
interface Package {
  id: string;
  label: string;
  price?: string;
}

const Contact = () => {
  const initialUser = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    additionalInfo: ''
  }
  
  const [page, setPage] = useState(1);
  const [vehicle, setVehicle] = useState('');
  const [packge, setPackage] = useState<Package | null>(null);
  const [userInfo, setUserInfo] = useState(initialUser);
  const [errors, setErrors] = useState({});

  const validateUserInfo = (user: User) => {
    let newErrors: { [key: string]: string } = {};
  
    if (!user.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
  
    if (!user.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
  
    if (!user.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(user.phoneNumber.trim())) {
      newErrors.phoneNumber = "Invalid phone number format";
    }
  
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateUserInfo(userInfo)) {
      const contactInfo = {
        vehicle: vehicle,
        package: packge,
        userInfo: userInfo
      }
      console.log(contactInfo)
      setPage(4)
      // Handle Data: Email, storage?
    }
  }

  const displayForm = () => {
    switch(page) {
      case 1:
        return <SelectCar setPage={setPage} vehicle={vehicle} setVehicle={setVehicle} />;
      case 2:
        return (
          <SelectPackage 
            vehicle={vehicle} 
            setPage={setPage} 
            packge={packge ? packge.id : null} 
            setPackage={setPackage}
          />
        );
      case 3:
        return (
          <InputInformation 
            setPage={setPage}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            onSubmit={handleSubmit}
            errors={errors}
            setErrors={setErrors}
          />
        );
      default:
        return (
          <ThankYouMessage onClose={() => {
            setVehicle('');
            setPackage(null);
            setUserInfo(initialUser);
            setPage(1);
          }}/>
        );
    }
  }

  return (
    <section id='contact' className="min-h-[100vh] bg-white dark:bg-slate-400 dark:text-white text-Teal pb-10 pt-10">
      <div className='mx-4 flex flex-wrap'>
        <div className='w-full px-4'>
            <div className='mx-auto  max-w-[510px] text-start'>
                <h2 className='pb-3 text-4xl font-semibold text-teal-700 dark:text-DTeal sm:text-4xl md:leading-[1.2] md:text-[40px]'>
                    Contact Us
                </h2>
                <div className='w-full border border-1 border-teal-600 mb-10'></div>
            </div>
        </div>
      </div> 
      <div className='flex flex-col items-center'>
        <div className='shadow-lg flex items-center justify-center overflow-hidden rounded-xl bg-accent dark:bg-slate-300 min-w-[90vw] min-h-[80vh] m-2 p-5'>
          {displayForm()}
        </div>
      </div>
    </section>
  )
}

export default Contact