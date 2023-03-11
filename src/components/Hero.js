import React from 'react';
import Nav from './Nav';

const Hero = () => {
  return (
    <div className='relative h-[600px]' style={{ backgroundImage: `url(./hero.jpg)`, backgroundPosition: 'center', backgroundSize: '100% 600px', backgroundRepeat: 'no-repeat' }}>
      <div className='relative w-full h-full bg-slate-800/[.40]'>
        <Nav />
        <div className='absolute top-40 left-60 w-[365px] h-40 font-[raleway] text-4xl text-white'>
          <span className='text-5xl'>
            Web<span className='text-emerald-500'>Me</span>
          </span>
          <div className='mt-2'>For all your web Development needs</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
