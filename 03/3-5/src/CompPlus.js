import React from 'react';
import { useRef } from 'react';
import CompResultBtn from './CompResultBtn';

const CompPlus = ({_stage,_changeStage,_num1,_num2,_changeResult,_point,_changePoint}) => {
  const refInput = useRef()
  return (
    <div>
      {_num1} + {_num2} = <input type="number" ref={refInput} />
      <hr />
      <CompResultBtn
        _stage = {_stage}
        _changeStage={_changeStage}
        _num1 = {_num1}
        _num2 = {_num2}
        _changeResult = {_changeResult}
        _point = {_point}
        _changePoint = {_changePoint}
        refInput = {refInput}
      />
    </div>
  );
};

export default CompPlus;