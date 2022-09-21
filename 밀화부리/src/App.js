import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import CompErrorMsg from './comp/CompErrorMsg';
import CompInputContainer from './comp/CompInputContainer';
import CompOutput from './comp/CompOutput';
import CompOutputMsg from './comp/CompOutputMsg';
import CompPreLoader from './comp/CompPreLoader';
import CompTitle from './comp/CompTitle';

export const AppContext = createContext()

const App = () => {
  let [_str,_changeStr] = useState()
  let [_showError,_changeShowError] = useState(false)
  let [_showSorry,_changeShowSorry] = useState(false)
  let [_showLoading,_changeShowLoading] = useState(true)

  useEffect(()=>{
      setTimeout(() => {
        document.querySelector('.proloader').classList.add('active')
      }, 500);
    document.querySelector('.proloader')('transitionend',()=>{
      _changeShowLoading(false)
    })
  },[])
  return (
    <AppContext.Provider value={{_str,_changeStr,_changeShowError,_changeShowSorry}}>
      <main className='app'>
        <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} alt="" />
        <CompTitle />
        <CompOutput />
        <CompInputContainer />
      </main>
      {_showError&&<CompErrorMsg/>}
      {_showSorry&&<CompOutputMsg/>}
      {_showLoading&&<CompPreLoader/>}
    </ AppContext.Provider>
  );
};

export default App;