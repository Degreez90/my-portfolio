import React from 'react';

const Card = (props) => {
  return <div className='flex flex-col items-center bg-white shadow-lg shadow-gray-400 rounded-md p-5 m-5'>{props.children}</div>;
};

export default Card;
