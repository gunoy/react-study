import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  let [_num1,_changeNum1] = useState('?')
  let [_num2,_changeNum2] = useState('?')
  let [_oper,_changeOper] = useState('?')
  let [_point,_changePoint] = useState(0)
  let refUserInput = useRef()

  const fnSetQuestion = ()=>{
    let arr = ['+','-','*','/']
    let random = Math.floor(Math.random()*4)
    let oper = arr[random]
    _changeOper(oper)
    _changeNum1(Math.ceil(Math.random() * 9))
    _changeNum2(Math.ceil(Math.random() * 9))
  }//fn

  const fnResult = () => {
    let result
    if(_oper === '+'){
      result =_num1 + _num2
    }else if(_oper === '-'){
      result =_num1 - _num2
    }else if(_oper === '*'){
      result =_num1 * _num2
    }else if(_oper === '/'){
      result =_num1 / _num2
    }
    let userNum = parseInt(refUserInput.current.value)
    if(result === userNum){
      let point = _point
      point++
      _changePoint(point)
    }else{

    }
  }

  return (
    <>
      <button onClick={fnSetQuestion}>문제내기</button>
      <hr />
      <span>{_num1}</span>
      <span>{_oper}</span>
      <span>{_num2}</span>
      =
      <input type="number" ref={refUserInput} />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <span>점수 : {_point}</span>
    </>
  );
};

export default App;