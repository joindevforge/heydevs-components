
import React from 'react';
import Marquee from 'react-fast-marquee';
import useScrollDirection from './useScrollDirection';

const Marquees = () => {
    const scrollDirection = useScrollDirection();
  const marqueeDirection = scrollDirection === 'down' ? 'left' : 'right';

  

  return (
    <Marquee direction={marqueeDirection} speed={100} gradient={false}>
      {/* Your marquee content here */}
      <div style={{ display: 'inline-block', padding: '10px', background: 'red' }}>Item 1</div>
      <div style={{ display: 'inline-block', padding: '10px', background: 'blue' }}>Item 2</div>
      <div style={{ display: 'inline-block', padding: '10px', background: 'green' }}>Item 3</div>
      <div style={{ display: 'inline-block', padding: '10px', background: 'yellow' }}>Item 4</div>
    </Marquee>
  );
};


export default Marquees;
