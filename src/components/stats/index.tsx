import { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import Stat from './stat';


const config = { mass: 5, tension: 1000, friction: 200 };
const Stats = () => {
    const [toggle, set] = useState(true);
    const statInfo = [
        {
            img: 'hour',
            number: 8,
            text: '+ Years of Experience'
        },
        {
            img: 'car',
            number: 10000,
            text: '+ Cars Detailed'
        },
        {
            img: 'thumb',
            number: 100,
            text: '% Satisfaction Guarantee'
        }
    ]
    const trail = useTrail(statInfo.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 }
    });
  return (
    <div className='bg-white dark:bg-slate-950'>
            <div className='flex flex-col sm:flex-row  items-center sm:justify-center ' onClick={() => set(state => !state)}>
                    {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={statInfo[index]}
                        className="w-full pb-10"
                        style={{
                        ...rest,
                        transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                        }}
                    >
                        <a.div style={{ height }}>{<Stat img={statInfo[index].img} number={statInfo[index].number} text={statInfo[index].text}/>}</a.div>
                    </a.div>
                    ))}
            </div>
    </div>
  )
}

export default Stats

