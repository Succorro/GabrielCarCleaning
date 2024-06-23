export const Hero = () => {

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <div className='flex justify-center items-center h-[50vh] border border-black '>
        <img className='object-contain' src="/GabrielCarCleaning.jpeg" alt="" />
      </div>
      <div className='flex my-10 mx-auto text-4xl text-teal-950'>
        <p>Perfection in Every Detail</p>
      </div>
    </div>
  )
}
