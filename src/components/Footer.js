import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-16 pb-3'>
      <div className='mx-auto px-5 container grid grid-cols-3 text-center text-2xl font-[raleway]'>
        <div>
          Web<span className='text-emerald-400'>Me</span>
        </div>
        <div className='text-3xl text-center'>
          <i className='bi px-2 bi-github'></i>
          <i className='bi px-2 bi-instagram'></i>
          <i className='bi px-2 bi-facebook'></i>
          <i className='bi px-2 bi-twitter'></i>
        </div>
        <div>
          <p className='text-lg font-light'>
            Created by Offitt
            <i className='text-emerald-400 text-xl bi bi-check-lg'></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
