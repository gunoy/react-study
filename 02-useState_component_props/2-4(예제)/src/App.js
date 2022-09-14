import React from 'react';
import { useState } from 'react';

const App = () => {
  let [_num1,_changeNum1] = useState(1)
  let [_num2,_changeNum2] = useState(1)
  let [_oper,_changeOper] = useState('+')
  let [_point,_changePont] = useState(0)
  let num1 = 1
  let num2 = 2
  let oper = '+'
  let result
  const fnChangeNum1 = (e) => {
    num1 = e.target.value
  }
  const fnChangeNum2 = (e) => {
    num2 = e.target.value
  }
  const fnChangeOper = (e) => {
    oper = e.target.value
  }
  const fnResult = () => {
    if(oper === '+'){
      result = num1 + num2
    }else if(oper === '-'){
      result = num1 - num2
    }
  }

  return (
    <>
      <select onChange={fnChangeNum1}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <select onChange={fnChangeOper}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

      <select onChange={fnChangeNum2}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <hr />
      <span>{_num1}</span>
      <span>{_oper}</span>
      <span>{_num2}</span>
      =
      <input type="number" />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <hr />
      <span>점수 : {_point}</span>
    </>
  );
};

export default App;