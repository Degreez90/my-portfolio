import React from 'react';
import Button from './Button';
import Card from './Card';

const Documentation = () => {
  return (
    <>
      <Card>
        <div className='py-10'>
          <div className='mx-auto container grid grid-cols-2 items-center gap-3'>
            <div className='grid'>
              <img src='/data.jpg' alt='' />
            </div>
            <div className='text-center'>
              <h2 className='text-xl font-extrabold font-[raleway]'>A platform with exceptional capabilities and an unmatched network.</h2>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure maxime laudantium ullam eum sapiente corporis officia impedit adipisci assumenda beatae, animi
                debitis enim nihil qui reiciendis alias blanditiis atque facere.
              </p>
              <div>
                <Button>More</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div>
        <div className='mx-auto container grid grid-cols-3 grid-rows-2 gap-4 text-left'>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-diagram-3'></i>
            </span>
            <h2 className='text-left'>WebMe Runtime</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique unde aliquam deleniti tempora dolores facere eos, libero laborum minus vitae nulla impedit
              commodi debitis quos asperiores quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-diagram-3'></i>
            </span>
            <h2 className='text-left'>Services and infastructure </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique unde aliquam deleniti tempora dolores facere eos, libero laborum minus vitae nulla impedit
              commodi debitis quos asperiores quas inventore. Necessitatibus.
            </p>
          </div>
          <div className='relative pl-24'>
            <span className='absolute left-2 text-6xl'>
              <i className='bi bi-diagram-3'></i>
            </span>
            <h2 className='text-left'>Services and infastructure </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique unde aliquam deleniti tempora dolores facere eos, libero laborum minus vitae nulla impedit
              commodi debitis quos asperiores quas inventore. Necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
