import { createContext } from 'react';
import React from 'react';
import { useState } from 'react';
import CompAdd from './Comp/CompAdd';
import Complist from './Comp/Complist';
import { listArr } from './store/list';

export const AppContext = createContext()

const App = () => {
  const [_stage,_changeStage] = useState('CompList')
  const [_listArr,_changeListArr] = useState(listArr)
  return (
    <AppContext.Provider value={{
      _stage,_changeStage,
      _listArr,_changeListArr
      }}>
      {(_stage === 'CompList')&&<Complist />}
      {(_stage === 'CompAdd')&&<CompAdd />}
    </AppContext.Provider>
  );
};

export default App;