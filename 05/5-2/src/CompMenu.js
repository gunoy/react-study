import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompMenu = () => {
  let {_changeStage,_changeNum1,_changeNum2} = useContext(AppContext)
  const fnChangeStage = (e)=>{
    _changeNum1(Math.ceil(Math.random()*9))
    _changeNum2(Math.ceil(Math.random()*9))
    _changeStage(e.target.getAttribute('data-stage'))

  }

  return (
    <div className='menu-container'>
      <button onClick={fnChangeStage} data-stage='plus'>더하기</button>
      <button onClick={fnChangeStage} data-stage='minus'>빼기</button>
    </div>
  );
};

export default CompMenu;