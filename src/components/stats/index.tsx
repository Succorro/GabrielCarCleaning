import AnimatedCounter from '../ui/AnimatedConter'
import { FaHourglassEnd } from 'react-icons/fa'
import {IoCarSport} from 'react-icons/io5'
import { IoMdThumbsUp } from "react-icons/io";
const Stats = () => {
  return (
    <div className='bg-white py-5'>
        <section className='flex flex-col sm:flex-row items-center mx-auto'>
            <div className={boxStyle}>
                <FaHourglassEnd size='40px' />
                <div className="flex mt-3">
                    <AnimatedCounter end={8} duration={1000}/>+ Years of Exdiverience
                </div>
            </div>
            <div className={boxStyle}>
                <IoCarSport size='40px'/>
                <div className="flex mt-3">
                    Over&nbsp;<AnimatedCounter end={10000} duration={1000}/>&nbsp;Cars Detailed
                </div>
            </div>
            <div className={boxStyle}>
                <IoMdThumbsUp size='40px'/>
                <div className="flex mt-3">
                    <AnimatedCounter end={100} duration={1000}/>% Satifaction Guarantee
                </div>
            </div>
        </section>
    </div>
  )
}

const boxStyle = 'flex flex-col items-center text-center text-teal-800 font-bold mx-auto my-5 py-5'
export default Stats