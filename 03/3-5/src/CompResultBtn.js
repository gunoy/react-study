import React from 'react';

const CompResultBtn = ({_stage,_changeStage,_num1,_num2,_changeResult,_point,_changePoint,refInput}) => {
  const fnSetResult = () => {
    let answer
    if(_stage === 'CompPlus'){
      answer = _num1 + _num2
    }else if(_stage === 'CompMinus'){
      answer = _num1 - _num2
    }
    if( answer === parseInt(refInput.current.value)){
      _changeResult('정답')
      let point = _point
      point++
      _changePoint(point)
    }else{
      _changeResult('오답')
      let point = _point
      point--
      _changePoint(point)
    }
    _changeStage('CompResult')
  } 
  return (
    <div>
      <button onClick={fnSetResult}>결과확인</button>
    </div>
  );
};

export default CompResultBtn;