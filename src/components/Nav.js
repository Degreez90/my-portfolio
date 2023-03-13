import React from 'react';

const nav = () => {
  return (
    <nav className='mx-auto container pt-5 md:py-5'>
      <div className='flex px-5 md:mx16'>
        <div className='flex font-[Raleway] text-white w-[100%]'>
          <h1>My Portfolio</h1>
        </div>
        <div className='flex text-white text-md font-Lato'>
          <ul className='flex space-x-5'>
            <li>
              <a className=' hover:border-solid hover:border-b-2 hover:border-b-white pb-1' href=''>
                Home
              </a>
            </li>
            <li>
              <a className=' hover:border-solid hover:border-b-2 hover:border-b-white pb-1' href=''>
                About
              </a>
            </li>
            <li>
              <a className=' hover:border-solid hover:border-b-2 hover:border-b-white pb-1' href=''>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default nav;
