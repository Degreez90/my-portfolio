import React from 'react'
import HeroB from '../components/HeroB'
import Layout from '../components/Layout'
import Card from '../components/Card'

const doc = () => {
  return (
    <Layout>
      <HeroB />
      <div>
        <div className='container mx-auto text-center'>
          <Card>
            <div className='max-w-lg'>
              <h2 className='mt-5 font-semibold'>Installation</h2>
              <p className='my-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                obcaecati exercitationem dicta ut ratione aliquid magnam nam et
                dolorem, animi officia a dignissimos in laborum veniam, sed
                inventore commodi repellendus.
              </p>
              <div className=' bg-green-600 px-2.5 py-2.5 text-white font-Lato font-semibold'>
                <i className='bi bi-info-lg font-semibold text-2xl'></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default doc
