import React from 'react';
import { useRef } from 'react';

const CompQ = (props) => {
  const {_num1,_num2,_changeNum1,_changeNum2,_changeStage,_changeResult,_changePoint} = props
  const refInput = useRef()
  const fnQ= () => {
    _changeNum1(Math.ceil(Math.random() * 9))
    _changeNum2(Math.ceil(Math.random() * 9))
    _changeResult()
  }
  const fnResult = () => {
      _changeStage(false)
  }
  return (
    <>
      <button onClick={fnQ}>문제제출</button>
      <hr />
      <span>{_num1}</span>
      *
      <span>{_num2}</span>
      =
      <input ref={refInput} type="text" size='2' defaultValue='0' />
      <hr />
      <button onClick={fnResult}>결과보기</button>
    </>
  );
};

export default CompQ;