import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompMenu = () => {
  let {_changeStage,_changeNum1,_changeNum2} = useContext(AppContext)
  const fnChangeStage = (e) => {
    _changeStage(e.target.getAttribute('data-stage'))
    _changeNum1(Math.ceil(Math.random()*9))
    _changeNum2(Math.ceil(Math.random()*9))
  }
  return (
    <div>
      <button data-stage='CompSum' onClick={fnChangeStage}>더하기</button>
      <br />
      <button data-stage='CompSub' onClick={fnChangeStage}>빼기</button>
      <br />
      <button data-stage='CompMulty' onClick={fnChangeStage}>곱하기</button>
      <br />
      <button data-stage='CompDivide' onClick={fnChangeStage}>나누기</button>
    </div>
  );
};

export default CompMenu;