import React, { useRef,createContext,useState } from 'react';
import CompDivide from './Comp/CompDivide';
import CompMenu from './Comp/CompMenu';
import CompMulty from './Comp/CompMulty';
import CompSub from './Comp/CompSub';
import CompSum from './Comp/CompSum';

export const AppContext = createContext()

const App = () => {
  const [_stage,_changeStage] = useState('CompMenu')
  const [_num1,_changeNum1] = useState(0)
  const [_num2,_changeNum2] = useState(0)
  const [_point,_changePoint] = useState(0)
  const refInput = useRef()
  return (
    <AppContext.Provider value={{
      _stage,
      _changeStage,
      _changeNum1,
      _changeNum2,
      _num1,
      _num2,
      refInput,
      _point,
      _changePoint
      }}>
      {(_stage === 'CompMenu')&&<CompMenu/>}
      {(_stage === 'CompSum')&&<CompSum/>}
      {(_stage === 'CompSub')&&<CompSub/>}
      {(_stage === 'CompMulty')&&<CompMulty/>}
      {(_stage === 'CompDivide')&&<CompDivide/>}
    </AppContext.Provider>
  );
};

export default App;