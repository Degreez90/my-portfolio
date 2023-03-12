import React from 'react';

const nav = () => {
  return (
    <nav className='mx-auto max-w-[1400px] py-5'>
      <div className='flex mx-16'>
        <div className='flex font-[Raleway] text-white w-[100%]'>
          <h1>WMy Portfolio</h1>
        </div>
        <div className='flex text-white'>
          <ul className='flex space-x-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default nav;