import React from 'react';

const CompPreLoader = () => {
  return (
    <div className='preloader'>
      <img src={`${process.env.PUBLIC_URL}/img/loading2.gif`} alt="" />
    </div>
  );
};

export default CompPreLoader;