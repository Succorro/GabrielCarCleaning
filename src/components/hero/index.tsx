export const Hero = () => {

  return (
    <div className="flex flex-col sm:flex-row min-h-[90vh] bg-white dark:bg-slate-950">
      <div className='flex justify-center items-center h-[50vh]'>
        <img className='object-contain' src="/GabrielCarCleaning.jpeg" alt="" />
      </div>
      <div className='flex flex-col sm:w-[40vw] items-center text-center sm:mt-16'>
        <div className='flex my-10 mx-auto font-bold text-4xl text-Teal sm:mx-0 sm:mb-20'>
          <p>Perfection in Every Detail</p>
        </div>
        <a href='#contact' className='bg-Teal w-32 text-white rounded-full py-2 sm:w-32'>
          Contact Us
        </a>
      </div>
    </div>
  )
}
