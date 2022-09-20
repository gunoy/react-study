import React, { useRef,createContext,useState,useEffect } from 'react';
import CompMenu from './CompMenu';
import CompPlus from './CompPlus';
import CompMinus from './CompMinus';
import CompResult from './CompResult';

export const AppContext = createContext();

const App = () => {
  let [_stage,_changeStage] = useState('plus')
  let [_num1,_changeNum1] = useState(Math.ceil(Math.random()*9))
  let [_num2,_changeNum2] = useState(Math.ceil(Math.random()*9))
  let [_point,_changePoint] = useState(0)
  let [_userNum,_changeUserNum] = useState('')
  useEffect(()=>{
    document.getElementById('root').classList.add('active')
  })
  return (
    <AppContext.Provider value={{_stage,_changeStage,_num1,_changeNum1,_num2,_changeNum2,_point,_userNum,_changeUserNum}}>
      <CompMenu />
      <hr />
      {(_stage === 'plus') ?<CompPlus />:<CompMinus />}
      <hr />
      <CompResult />
    </AppContext.Provider>
  );
};

export default App;