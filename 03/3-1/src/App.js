import React from 'react';
import { useState } from 'react';
import CompQ from './Comp/CompQ';
import CompResult from './Comp/CompResult';

const App = () => {
  const [_num1,_changeNum1] = useState()
  const [_num2,_changeNum2] = useState()
  const [_stage,_changeStage] = useState(true)
  const [_result,_changeResult] = useState('정오답')
  const [_point,_changePoint] = useState(0)

  return (
    <>
      { (_stage === true) /* { (1>0)?5:10 } ()안에 조간이 참이면 앞에 5가 출력,거짓이면 10이 출력됨 */
        ?
        <CompQ
          _num1={_num1}
          _changeNum1={_changeNum1}
          _num2={_num2}
          _changeNum2={_changeNum2}
          _changeStage={_changeStage}
          _changeResult={_changeResult}
          _changePoint={_changePoint}
        />
        :
        <CompResult
        _point={_point}  
        _result={_result}
        />
      }
    </>
  );
};

export default App;