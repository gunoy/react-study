import React from 'react';
import { useState } from 'react';
import CompMinus from './CompMinus';
import CompPlus from './CompPlus';
import CompResult from './CompResult';
import CompStart from './CompStart';

const App = () => {
  const [_stage,_changeStage] = useState('CompStart')
  const [_num1,_changeNum1] = useState(0)
  const [_num2,_changeNum2] = useState(0)
  const [_result,_changeResult] = useState('')
  const [_point,_changePoint] = useState(0)
  return (
    <>
      {(_stage === 'CompStart')&&<CompStart
        _changeStage={_changeStage}
        _changeNum1 = {_changeNum1}
        _changeNum2 = {_changeNum2}
      />}
      {(_stage === 'CompPlus')&&<CompPlus
        _stage = {_stage}
        _changeStage={_changeStage}
        _num1 = {_num1}
        _num2 = {_num2}
        _changeResult = {_changeResult}
        _point = {_point}
        _changePoint = {_changePoint}
      />}
      {(_stage === 'CompMinus')&&<CompMinus
        _stage = {_stage}
        _changeStage={_changeStage}
        _num1 = {_num1}
        _num2 = {_num2}
        _changeResult = {_changeResult}
        _point = {_point}
        _changePoint = {_changePoint}
      />}
      {(_stage === 'CompResult')&&<CompResult 
        _changeStage={_changeStage}
        _result = {_result}
        _point = {_point}
      />}
    </>
  );
};

export default App;