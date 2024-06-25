import { useState } from 'react'
import Form from './form'
import SelectCar from './selectCar'
import SelectPackage from './selectPackage'
import InputInformation from './inputInformation'
const Contact = () => {

  const [page, setPage] = useState(1);
  const [vehicle, setVehicle] = useState('');
  const [packge, setPackage] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    additionalInfo: ''
  });

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
        <InputInformation setPage={setPage} userInfo={userInfo} setUserInfo={setUserInfo}/>
      )
    }
  }

  return (
    <section id='contact' className="min-h-[100vh] bg-white text-Teal">
      <div className='mx-10 pt-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
              <div className='mx-auto mb-[30px] max-w-[510px] text-center'>
                  <span className='mb-2 block text-lg font-semibold text-Blue'>
                      Contact Us
                  </span>
                  <h2 className='mb-3 text-3xl font-bold sm:text-4xl md:leading-[1.2] md:text-[40px]'>
                      Detailing Services
                  </h2>
                  <p>
                    Let us know about your vehicle!
                  </p>
              </div>
          </div>
        </div> 
      </div>
      <div className='flex flex-col items-center'>
        <Form
              initialSize="60px"
              expandedSize="500px"
              initialColor="#1d4ed8"
              expandedColor="#F0F4F8"
              buttonText="Start"
              className=''
          >
            {displayForm()}
          </Form>
      </div>
    </section>
  )
}

export default Contact