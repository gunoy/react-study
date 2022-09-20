import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';
import CompUserNum from './CompUserNum';

const CompMinus = () => {
  let {_num1,_num2} = useContext(AppContext)
  useEffect(()=>{
    let id = setTimeout(()=>{
      document.querySelector('.comp-minus').classList.add('active')
    },10)
    return(()=>{
      clearTimeout(id)
    })
  },[])
  return (
    <from className='comp-minus'>
      {_num1} - {_num2} = <CompUserNum />
    </from>
  );
};

export default CompMinus;