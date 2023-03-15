import React from 'react';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <div className='relative flex flex-col min-h-screen'>
        <main className='grow'>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
