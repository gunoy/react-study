import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';
import CompSubVisualDiv1 from './CompSubVisualDiv1';
import CompSubVisualDiv2 from './CompSubVisualDiv2';
import CompSubVisualDiv3 from './CompSubVisualDiv3';
import CompSubVisualDiv4 from './CompSubVisualDiv4';
import CompSubVisualDiv5 from './CompSubVisualDiv5';

const CompSubVisual = () => {
  let {pathArr} = useContext(AppContext)
  let menuCategory = pathArr[1]
  useEffect(()=>{
    let script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/particle.js`;
    document.body.appendChild(script);
    let scriptStar = document.createElement('script');
    scriptStar.src = `${process.env.PUBLIC_URL}/js/app_particle_star.js`;
    document.body.appendChild(scriptStar);
    scriptStar.remove()
  },[])
  return (
    <section className="sub-visual">
      {menuCategory === 'company'&&<CompSubVisualDiv1/>}
      {menuCategory === 'biz'&&<CompSubVisualDiv2/>}
      {menuCategory === 'online'&&<CompSubVisualDiv3/>}
      {menuCategory === 'product'&&<CompSubVisualDiv4/>}
      {menuCategory === 'comunity'&&<CompSubVisualDiv5/>}
      <figure id='particles-js'></figure>
    </section>
  );
};

export default React.memo(CompSubVisual);