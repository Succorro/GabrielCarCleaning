export const Hero = () => {

  return (
    <div className="flex flex-col sm:flex-row min-h-[90vh] bg-white dark:bg-slate-400">
      <div className='flex justify-center items-center h-[50vh]'>
        <img className='object-contain' src="/GCCBg.PNG" alt="" />
      </div>
      <div className='flex flex-col sm:w-[40vw] items-center text-center sm:mt-16'>
        <div className='flex my-10 mx-auto font-medium text-2xl text-Teal dark:text-DTeal sm:mx-0 sm:mb-20'>
          <p>With Every Detail Customer Satisfaction is Our Aim</p>
        </div>
        <a href='#contact' className='bg-teal-600 hover:bg-teal-700 dark:bg-DTeal dark:hover:bg-teal-900 w-32 text-white dark:text-teal-50 rounded-full py-2 sm:w-32'>
          Contact Us
        </a>
      </div>
    </div>
  )
}
