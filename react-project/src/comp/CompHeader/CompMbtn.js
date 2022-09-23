import React from 'react';
import { useEffect } from 'react';

const CompMbtn = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/mbtn.js`;
    document.body.appendChild(script);
    return(()=>{
      script.remove()
    })
  })
  return (
    <button className='mbtn'>
      <i class="bar fa-solid fa-bars-staggered"></i>
      <i class="close fa-solid fa-xmark"></i>
    </button>
  );
};

export default CompMbtn;