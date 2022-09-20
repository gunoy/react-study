import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompUserNum = () => {
  let {_stage,_userNum,_changeUserNum,_num1,_num2} = useContext(AppContext)
  const fnResult = (e)=>{
    e.preventDefault()
  }
  const fnCheckInput = (e) => {
    _changeUserNum(parseInt(e.target.value))
  }

  useEffect(()=>{
    let calcNumber = (_stage === 'plus')?_num1 + _num2:_num1 - _num2
    let elInput = document.querySelector('user-input')
    elInput.classList.remove('active1','active2')
    if(calcNumber === _userNum){
      elInput.classList.add('active1')
    }else{
      elInput.classList.add('active2')
    }
  })

  return (
    <>
      <input className='user-input' type="number" onChange={fnCheckInput}/>
      <button onSubmit={fnResult}>결과보기</button>
    </>
  );
};

export default CompUserNum;