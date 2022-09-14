import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CompPoint from './CompPoint';

const App = () => {
  let [_point,_changePoint] = useState(0)
  let oper = '+'
  const refInput1 = useRef()
  const refInput2 = useRef()
  const refInput3 = useRef()
  const fnChangeOper = (e) => {
    oper = e.target.value
  }
  const fnResult = () => {
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let num3 = parseInt(refInput3.current.value)
    let result
    if(oper === '+'){
      result = num1 + num2
    }else if(oper === '-'){
      result = num1 - num2
    }else if(oper === '*'){
      result = num1 * num2
    }else if(oper === '/'){
      result = num1 / num2
    }
    if(result === num3){
      let p = _point
      p++
      _changePoint(p)
    }
  }
  return (
    <>
      <input type="text" ref={refInput1} />
      <select onChange={fnChangeOper}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" ref={refInput2}/>
      =
      <input type="number" ref={refInput3} />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <hr />
      <CompPoint _point={_point}/>
    </>
  );
};

export default App;