import React from 'react'

const Stats = () => {
  return (
    <div className='flex bg-white h-[20vh] justify-center'>
        <section className='flex flex-row items-center mx-auto'>
            <div className={boxStyle}>1</div>
            <div className={boxStyle}>2</div>
            <div className={boxStyle}>3</div>
        </section>
    </div>
  )
}

const boxStyle = ' border border-black p-10 mx-9 sm:mx-16 md:mx-24 lg:32'
export default Stats