import React from 'react';

const Section = () => {
  return (
    <div className='bg-neutral-700'>
      <div className='mx-auto container text-white px-5 py-5'>
        <div className='flex justify-center'>
          <h3 className='text-4xl'>Our Services</h3>
        </div>
        <div className='grid auto-rows-auto md:grid-cols-4 md:grid-rows-none gap-5 my-5 container items-center md:items-start'>
          <div className='text-center p-5'>
            <i className='text-4xl bi bi-code-slash'></i>
            <div className='font-Lato text-3xl py-5'>Web Development</div>
            <div>
              Fugiat commodo cupidatat sit officia Lorem ullamco consequat id amet duis est. Aliquip do culpa nostrud occaecat do laboris quis ipsum reprehenderit irure incididunt.
              Minim mollit proident occaecat nulla. Tempor ad elit laboris nisi ad laborum sunt deserunt incididunt incididunt in proident sint cupidatat. Aute et irure aute sint.
              Duis tempor et ad mollit nulla enim amet velit irure. Sunt duis est ex commodo commodo consectetur est dolor magna.
            </div>
          </div>
          <div className=' text-center p-5 items-center'>
            <i className='text-4xl bi bi-box'></i>
            <div className='font-Lato text-3xl py-5'>Product Design</div>
            <div>
              Laborum laborum excepteur occaecat amet deserunt ipsum tempor ex ut exercitation. Ea labore incididunt duis ea anim fugiat labore cupidatat aliquip ipsum. Nostrud
              culpa eiusmod quis ea amet eu duis aliqua.
            </div>
          </div>
          <div className='text-center p-5 items-center'>
            <i className='text-4xl bi bi-window'></i>
            <div className='font-Lato text-3xl py-5'>Market Strategy</div>
            <div>
              Magna non laboris esse duis. Cillum ad sit eu id enim id in sint cillum ad cillum ipsum magna. Deserunt cillum consectetur consectetur ipsum Lorem adipisicing esse
              velit irure. Magna eiusmod cupidatat anim enim culpa cillum sint commodo excepteur exercitation cupidatat veniam.
            </div>
          </div>
          <div className='text-center p-5 items-center'>
            <i className='text-4xl bi bi-box'></i>
            <div className='font-Lato text-3xl py-5'>Ecommerce</div>
            <div>
              In nostrud est incididunt consequat pariatur Lorem. Cillum cupidatat quis elit nisi pariatur officia est eiusmod dolore cupidatat non consequat. Est in eiusmod ad
              laborum exercitation id commodo reprehenderit irure eu irure exercitation. Ex ipsum sunt anim velit laboris qui fugiat velit.
            </div>
            <div>
              Fugiat esse dolore incididunt enim anim culpa mollit incididunt adipisicing eiusmod. Labore consequat enim ipsum sit excepteur aliqua amet ea occaecat adipisicing
              anim. Ullamco mollit ipsum occaecat ut officia aliquip ea aliqua aliqua commodo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
