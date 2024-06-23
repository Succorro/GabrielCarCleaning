import React from 'react'
import { Hourglass, Car, ThumbsUp} from 'lucide-react'
const Stats = () => {
  return (
    <div className='bg-white py-5'>
        <section className='flex flex-col sm:flex-row items-center mx-auto'>
            <div className={boxStyle}>
                <Hourglass size='40px' />
                <p className=" mt-3">8+ Years of Experience</p>
            </div>
            <div className={boxStyle}>
                <Car size='40px'/>
                <p className=" mt-3"> Over 10,000 Cars Detailed</p>
            </div>
            <div className={boxStyle}>
                <ThumbsUp size='40px'/>
                <p className=" mt-3">100% Satifaction Guarantee</p>
            </div>
        </section>
    </div>
  )
}

const boxStyle = 'flex flex-col items-center text-center text-teal-800 font-bold mx-auto my-5 py-5'
export default Stats