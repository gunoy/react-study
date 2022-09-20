import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';
import CompUserNum from './CompUserNum';

const CompPlus = () => {
  let {_num1,_num2} = useContext(AppContext)
  useEffect(()=>{
    let id = setTimeout(()=>{
      document.querySelector('.comp-plus').classList.add('active')
    },10)
    return(()=>{
      clearTimeout(id)
    })
  },[])
  return (
    <from className='comp-plus'>
      {_num1} + {_num2} = <CompUserNum />
    </from>
  );
};

export default CompPlus;