import React from 'react';

const Section = () => {
  return (
    <div className='mx-auto w-[1300px] mt-5'>
      <div className='flex justify-center'>
        <h3 className='text-2xl'>Our Services</h3>
      </div>
      <div className='grid grid-cols-4 mt-5 w-[1300px] justify-items-center'>
        <div className='text-center'>
          <i className='text-4xl bi bi-code-slash'></i>
          <div className='font-Lato text-3xl py-5'>Web Development</div>
        </div>
        <div className='flex flex-col min-w-[300px] items-center'>
          <i class='text-4xl bi bi-box'></i>
          <div className='font-Lato text-3xl py-5'>Product Design</div>
        </div>
        <div className='flex flex-col min-w-[300px] items-center'>
          <i class='text-4xl bi bi-window'></i>
          <div>block</div>
        </div>
        <div className='flex flex-col min-w-[300px] items-center'>
          <i class='text-4xl bi bi-box'></i>
          <div>block</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
