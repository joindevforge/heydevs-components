
import React from 'react';
import Marquee from 'react-fast-marquee';
import useScrollDirection from './useScrollDirection';

const data = [
    "/assets/home/svg/svgexport-6.svg",
    "/assets/home/svg/svgexport-7.svg",
    "/assets/home/svg/svgexport-8.svg",
    "/assets/home/svg/svgexport-9.svg",
    "/assets/home/svg/svgexport-10.svg",
    "/assets/home/svg/svgexport-11.svg",
    "/assets/home/svg/svgexport-12.svg",
    "/assets/home/svg/svgexport-13.svg",
    "/assets/home/svg/svgexport-14.svg",
    "/assets/home/svg/svgexport-15.svg",
    "/assets/home/svg/svgexport-16.svg",
    "/assets/home/svg/svgexport-17.svg",
    "/assets/home/svg/svgexport-18.svg",
    "/assets/home/svg/svgexport-19.svg",
    "/assets/home/svg/svgexport-20.svg",
    "/assets/home/svg/svgexport-21.svg",
]

const Marquees = () => {
    const scrollDirection = useScrollDirection();
  const marqueeDirection = scrollDirection === 'down' ? 'right' : 'left';

  

  return (
    <div className='flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap'>
    <Marquee direction={marqueeDirection} speed={25} gradient={false} className='flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap'>
        {data.map((item, index) => (

           <div className='flex items-center justify-center mx-5 w-full h-full' key={index}>
           <img src={item} alt="marquee"   />
           </div>
        ))}
    </Marquee>
    </div>
  );
};


export default Marquees;
