import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className='relative'>
    <Nav />
    <div className='w-[100%] h-[300px] bg-no-repeat bg-auto'>
      <img style={{width: '100%', height: '500px'}} src="/hero.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero