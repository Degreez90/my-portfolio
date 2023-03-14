import React from 'react';
import Nav from './Nav';

const HeroB = () => {
  return (
    <div
      className='relative h-[100%] md:h-[550px]'
      style={{ backgroundImage: `url(/hero.jpg)`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}
    >
      <div className='relative w-full h-full bg-slate-800/[.40]'>
        <Nav />
        <div className='mx-auto container relative bottom-12 md:bottom-0 grid grid-rows-2 items-center justify-items-center md:justify-items-center md:grid-rows-none md:grid-cols-2 gap-3'>
          <div className='pt-10 md:pt-32 md:max-w-[365px] text-center font-[raleway] text-4xl text-white'>
            <h1 className='text-5xl'>
              Web<span className='text-emerald-500'>Me</span>
            </h1>
            <div className='mt-2'>For all your web Development needs</div>
          </div>
          {/* <div className='md:showcase-form showcase-form-shrink'> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroB;
