import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';
import { useEffect } from 'react';

const CompChangeNum1btn = () => {
  let {_changeNum1} = useContext(AppContext)

  useEffect(()=>{
    document.querySelector('.btn1').addEventListener('click',()=>{
      _changeNum1(3)
      console.log('btn');
    })
  },[])

  return (
    <button className='btn1'>
      num1 숫자바꾸기
    </button>
  );
};

export default CompChangeNum1btn;