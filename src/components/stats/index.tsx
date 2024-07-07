import React, { useRef } from "react";
import { useTrail, animated as a } from "react-spring";
import Stat from './stat';
import useOnScreen from '../../hooks/useOnScreen';

const config = { mass: 5, tension: 1000, friction: 200 };

const Stats: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref, '-50px');

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
    ];

    const trail = useTrail(statInfo.length, {
        config,
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)',
        from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
        delay: 100
    });

    return (
        <div className='bg-white dark:bg-slate-400' ref={ref}>
            <div className='flex flex-col sm:flex-row items-center sm:justify-center'>
                {trail.map((style, index) => (
                    <a.div
                        key={statInfo[index].img}
                        className="w-full pb-10"
                        style={style}
                    >
                        <Stat 
                            img={statInfo[index].img} 
                            number={statInfo[index].number} 
                            text={statInfo[index].text}
                        />
                    </a.div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
