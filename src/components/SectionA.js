import React from 'react';

const SectionA = () => {
  return (
    <div>
      <div className='mx-auto mt-5 mb-5 px-5 container grid gap-3 md:grid-cols-2 justify-items-center md:grid-rows-2 sm:grid-rows-3 sm:grid-cols-1 items-center'>
        <img className=' row-span-2 h-[300px]' src='./web.jpg' alt='' />
        <div className='px-24 md:w-5/6 w-full mx-5 py-10 rounded-xl shadow-gray-400 shadow-md text-xl'>
          <h3>Easy to Use</h3>
        </div>
        <div className='px-24 md:w-5/6 w-full mx-5 py-10 rounded-xl shadow-gray-400 shadow-lg text-xl'>Easy to Use</div>
      </div>
    </div>
  );
};

export default SectionA;
