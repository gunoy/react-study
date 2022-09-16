import React from 'react';
import { useRef } from 'react';

const CompQuestion = ({_num1,_num2,_changeNum1,_changeNum2,_changeStage,_result,_changeResult,_point,_changePoint}) => {
  let userInput = useRef()
  const fnSetNumber = () => {
    _changeNum1(Math.ceil(Math.random()*9))
    _changeNum2(Math.ceil(Math.random()*9))
  }
  const fnSetResult = () => {
    let userNum = parseInt(userInput.current.value)
    _changeStage('result')
    if(userNum === _num1*_num2){
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
  }

  return (
    <div>
      <button onClick={fnSetNumber}>문제제출</button>
      <hr />
      <b>{_num1}</b> * <b>{_num2}</b> = <input type="number" ref={userInput} size="1" />
      <hr />
      <button onClick={fnSetResult}>결과보기</button>
    </div>
  );
};

export default CompQuestion;