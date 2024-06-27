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
  const [packge, setPackage] = useState('');
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
      // Here you would typically send the data to your backend
    }
  }

  const displayForm = () => {
    if(page === 1){
      return(
        <SelectCar setPage={setPage} vehicle={vehicle} setVehicle={setVehicle}/>
      )
    } else if (page === 2 ){
      return(
        <SelectPackage setPage={setPage} packge={packge} setPackage={setPackage}/>
      )
    } else if (page === 3) {
      return (
        <InputInformation 
          setPage={setPage}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          onSubmit={handleSubmit}
          errors={errors}
          setErrors={setErrors}
        />
      )
    } else {
      return (
        <ThankYouMessage onClose={()=>{
          setVehicle('');
          setPackage('');
          setUserInfo(initialUser);
          setPage(1);
        }}/>
      )
    }
  }

  return (
    <section id='contact' className="min-h-[100vh] bg-white dark:bg-slate-950 dark:text-white text-Teal pb-10">
      <div className='mx-10 pt-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
              <div className='mx-auto mb-[30px] max-w-[510px] text-center'>
                  <span className='mb-2 block text-lg font-semibold text-blue-800 dark:text-blue-600'>
                      Contact Us
                  </span>
                  <h2 className='mb-3 text-3xl font-bold sm:text-4xl md:leading-[1.2] md:text-[40px]'>
                      Detailing Services
                  </h2>
              </div>
          </div>
        </div> 
      </div>
      <div className='flex flex-col items-center'>
        <div className='shadow-lg flex items-center justify-center overflow-hidden bg-accent dark:bg-slate-800 w-[90vw] h-[80vh]'>
          {displayForm()}
        </div>
      </div>
    </section>
  )
}

export default Contact