import { FaHourglassEnd } from "react-icons/fa"
import AnimatedCounter from "../ui/AnimatedConter"
import {IoCarSport} from 'react-icons/io5'
import { IoMdThumbsUp } from "react-icons/io";

const Stat = ({img, number, text}) => {
    const image = () => {
        if(img === 'hour'){
            return (
                <FaHourglassEnd size ='40px'/>
            )
        } else if(img === 'car'){
            return (
                <IoCarSport size='40px'/>
            )
        } else {
            return(
                <IoMdThumbsUp size='40px'/>
            )
        }
    }
  return (
    <div className='flex flex-col items-center text-center text-Teal dark:text-teal-200 font-bold mx-auto my-5 py-5'>
        {image()}
        <div className="flex mt-3">
            <AnimatedCounter end={number} duration={1000}/>{text}
        </div>
    </div>
  )
}

export default Stat