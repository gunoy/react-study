import React from 'react';

const CompStart = ({_changeStage,_changeNum1,_changeNum2}) => {
  const fnChangeStage = (e) => {
    let stage = e.target.getAttribute('data-stage') // = $(this).attr('data-stage')
    _changeStage(stage)
    _changeNum1(Math.ceil(Math.random() * 9))
    _changeNum2(Math.ceil(Math.random() * 9))
  }
  return (
    <div>
      <p>문제 종류를 선택하세요</p>
      <button onClick={fnChangeStage} data-stage="CompPlus">더하기</button>
      <button onClick={fnChangeStage} data-stage="CompMinus">빼기</button>
    </div>
  );
};

export default CompStart;