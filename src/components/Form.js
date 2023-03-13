import React from 'react';

const Form = (props) => {
  return <div className='flex flex-col relative md:top-14 min-w-[300px] md:w-[350px] items-center bg-white shadow-lg shadow-gray-400 rounded-md p-5 md:m-5'>{props.children}</div>;
};

export default Form;
