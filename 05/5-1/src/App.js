import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CompChangeNum1btn from './CompChangeNum1btn';
import CompNum1 from './CompNum1';

export let AppContext = createContext()

const App = () => {
  let [_num1,_changeNum1] = useState(0)

  useEffect(()=>{
    console.log('App');
  })

  return (
    <AppContext.Provider value={{_num1,_changeNum1}}>
      <CompNum1 />
      <hr />
      <CompChangeNum1btn />
    </ AppContext.Provider>
  );
};

export default App;