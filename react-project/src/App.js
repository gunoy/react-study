import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import CompInputContainer from './comp/CompInputContainer';
import CompOutput from './comp/CompOutput';
import CompTitle from './comp/CompTitle';

export const AppContext = createContext()

const App = () => {
  let [_str,_changeStr] = useState()
  return (
    <AppContext.Provider value={{_str,_changeStr}}>
      <main className='app'>
        <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} alt="" />
        <CompTitle />
        <CompOutput />
        <CompInputContainer />
      </main>
    </ AppContext.Provider>
  );
};

export default App;