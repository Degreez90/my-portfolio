import React from 'react'
import Card from './Card'

const SectionC = () => {
  return (
    <div>
      <h2 className='text-center text-4xl my-6'>
        Supported Languages and Platforms
      </h2>
      <div className='mx-auto container flex flex-wrap md:flex-row flex-col text-center justify-center'>
        <Card>
          <h2 className='mb-3 text-xl'>NodeJS</h2>
          <img className='max-w-20 max-h-20' src='/nodejs.svg' alt='' />
        </Card>
        <Card>
          <h2 className='mb-3 text-xl'>React</h2>
          <img className='max-w-20 max-h-20' src='/react.svg' alt='' />
        </Card>
        <Card>
          <h2 className='mb-3 text-xl'>MongoDB</h2>
          <img className='max-w-20 max-h-20' src='/mongodb.svg' alt='' />
        </Card>
        <Card>
          <h2 className='mb-3 text-xl'>Gatsby</h2>
          <img
            className='md:max-w-20 md:max-h-20 max-w-16 max-h-16'
            src='/gatsby.svg'
            alt=''
          />
        </Card>
        <Card>
          <h2 className='mb-3 text-xl'>Firebase</h2>
          <img className='max-w-20 max-h-20' src='/firebase.svg' alt='' />
        </Card>
        <Card>
          <h2 className='mb-3 text-xl'>GraphQL</h2>
          <img className='max-w-20 max-h-20' src='/graphql.svg' alt='' />
        </Card>
      </div>
    </div>
  )
}

export default SectionC
