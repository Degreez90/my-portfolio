import React from 'react'
import Button from './Button'

const Documentation = () => {
  return (
    <>
      <div className='py-10  bg-white shadow-lg shadow-gray-400'>
        <div className='mx-auto container grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 items-center gap-3'>
          <div className='grid'>
            <img src='/data.jpg' alt='' />
          </div>
          <div className='text-center'>
            <h2 className='text-xl font-extrabold font-[raleway]'>
              A platform with exceptional capabilities and an unmatched network.
            </h2>
            <p className='py-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              maxime laudantium ullam eum sapiente corporis officia impedit
              adipisci assumenda beatae, animi debitis enim nihil qui reiciendis
              alias blanditiis atque facere.
            </p>
            <div>
              <Button>More</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='mx-auto container grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 md:gap-y-16 gap-x-10 gap-y-10 text-left pt-24'>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-diagram-3'></i>
            </span>
            <h2 className='text-left text-lg font-semibold'>WebMe Runtime</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              similique unde aliquam deleniti tempora dolores facere eos, libero
              laborum minus vitae nulla impedit commodi debitis quos asperiores
              quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-sliders'></i>
            </span>
            <h2 className='text-left text-lg font-semibold'>
              WebMe Developer Experience
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              similique unde aliquam deleniti tempora dolores facere eos, libero
              laborum minus vitae nulla impedit commodi debitis quos asperiores
              quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-hdd-stack'></i>
            </span>
            <h2 className='text-left text-lg font-semibold'>
              Services and infastructure
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              similique unde aliquam deleniti tempora dolores facere eos, libero
              laborum minus vitae nulla impedit commodi debitis quos asperiores
              quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-hypnotize'></i>
            </span>
            <h2 className='text-left text-lg font-semibold'>
              WebMe Operational Experience
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              similique unde aliquam deleniti tempora dolores facere eos, libero
              laborum minus vitae nulla impedit commodi debitis quos asperiores
              quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-fingerprint'></i>
            </span>
            <h2 className='text-left text-lg font-semibold'>
              Saftey and Protection
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              similique unde aliquam deleniti tempora dolores facere eos, libero
              laborum minus vitae nulla impedit commodi debitis quos asperiores
              quas inventore. Necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
