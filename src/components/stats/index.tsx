import { Hourglass, Car, ThumbsUp} from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedConter'

const Stats = () => {
  return (
    <div className='bg-white py-5'>
        <section className='flex flex-col sm:flex-row items-center mx-auto'>
            <div className={boxStyle}>
                <Hourglass size='40px' />
                <p className="flex mt-3">
                    <AnimatedCounter end={8} duration={1000}/>+ Years of Experience
                </p>
            </div>
            <div className={boxStyle}>
                <Car size='40px'/>
                <p className="flex mt-3">
                    Over&nbsp;<AnimatedCounter end={10000} duration={1000}/>&nbsp;Cars Detailed
                </p>
            </div>
            <div className={boxStyle}>
                <ThumbsUp size='40px'/>
                <p className="flex mt-3">
                    <AnimatedCounter end={100} duration={1000}/>% Satifaction Guarantee
                </p>
            </div>
        </section>
    </div>
  )
}

const boxStyle = 'flex flex-col items-center text-center text-teal-800 font-bold mx-auto my-5 py-5'
export default Stats