import React, { Children } from 'react';

const Button = (props) => {
  return (
    <div className='my-5 bg-emerald-400 rounded-lg text-white py-2 px-7 transition hover:ease-out hover:scale-110 duration-300 cursor-pointer inline-block'>{props.children}</div>
  );
};

export default Button;
