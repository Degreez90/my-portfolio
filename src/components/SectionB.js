import React from 'react';

const SectionB = () => {
  return (
    <div className='bg-sky-500 py-6 my-2'>
      <div className='mx-auto container grid grid-cols-2 gap-2 px-5 grid-rows-1 items-center justify-items-center'>
        <div className='text-center text-white'>
          <h2 className='text-3xl'>Robust Cloud Hosting</h2>
          <p className='py-5'>Cloud hosting like you've never seen. Fast, efficient and scalable</p>
          <a className='px-10 py-5 inline-block text-black bg-slate-200 hover:bg-slate-700 rounded-lg'>Read More</a>
        </div>
        <img src='./hosting.png' alt='' />
      </div>
    </div>
  );
};

export default SectionB;
