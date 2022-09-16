import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompMenuBtn = () => {
  let {_changeStage} = useContext(AppContext)
  return (
    <div>
      <button onClick={function(){_changeStage('CompMenu')}}>메뉴화면으로</button>
    </div>
  );
};

export default CompMenuBtn;