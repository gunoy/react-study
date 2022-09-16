import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompResult = () => {
  let {_stage,_num1,_num2,refInput,_point,_changePoint} = useContext(AppContext)
  const fnReult = ()=> {
    let calcNum
    let userNum = parseInt(refInput.current.value)
    if(_stage === 'CompSum'){
      calcNum = _num1 + _num2
    }else if(_stage === 'CompSub'){
      calcNum = _num1 - _num2
    }else if(_stage === 'CompMulty'){
      calcNum = _num1 * _num2
    }else if(_stage === 'CompDivide'){
      calcNum = _num1 / _num2
    }
    let result = (calcNum === userNum)?'정답':'오답'
    console.log(result);
    let point = _point
    if(calcNum === userNum){
      point ++
      _changePoint(point)
    }else{
      point --
      _changePoint(point)
    }
  }
  return (
    <>
      <button onClick={fnReult}>결과보기</button>
    </>
  );
};

export default CompResult;