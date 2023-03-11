import React from 'react';

const SectionA = () => {
  return (
    <div>
      <div className='mx-auto mt-5 mb-20 max-w-[1400px] grid grid-cols-2 justify-items-center grid-rows-2 items-center'>
        <img className=' row-span-2 h-[300px]' src='./web.jpg' alt='' />
        <div className='px-48 py-10 rounded-xl shadow-gray-300 shadow-md'>Easy to Use</div>
        <div className='px-48 py-10 rounded-xl shadow-lg'>Easy to Use</div>
      </div>
    </div>
  );
};

export default SectionA;
