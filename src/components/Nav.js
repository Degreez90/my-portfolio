import React from 'react'
import { Link } from 'gatsby'

const nav = () => {
  return (
    <nav className='mx-auto container pt-5 md:py-5'>
      <div className='flex px-5 md:mx16'>
        <div className='flex font-[Raleway] font-semibold text-white w-[100%]'>
          <Link to='/'>
            <h1>
              Web<span className='text-emerald-500'>Me</span>
            </h1>
          </Link>
        </div>
        <div className='flex text-white text-md font font-Lato z-50'>
          <ul className='flex space-x-5'>
            <li>
              <Link
                className='hover:border-solid hover:border-b-2 hover:border-b-white pb-1'
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:border-solid hover:border-b-2 hover:border-b-white pb-1'
                to='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className=' hover:border-solid hover:border-b-2 hover:border-b-white pb-1'
                to='/doc'
              >
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default nav
