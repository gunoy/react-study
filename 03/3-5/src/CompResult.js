import React from 'react';

const CompResult = ({_changeStage,_result,_point}) => {
  return (
    <div>
      {_result}입니다
      점수 : {_point}
      <button onClick={function(){_changeStage('CompStart')}}>처음으로</button>
    </div>
  );
};

export default CompResult;