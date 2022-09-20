import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import CompListLi from './CompListLi';

const Complist = () => {
  let {_changeStage,_listArr} = useContext(AppContext)
  const fnChangeStage = ()=>{
    _changeStage('CompAdd')
  }
  return (
    <div>
      <h3>명단출력화면</h3>
      <ul>
        {
        _listArr.map((v)=>{
          return <CompListLi key={v.아이디} 사람정보={v}/>
        })
        }
      </ul>
      <hr />
      <button onClick={fnChangeStage}>명단추가 화면으로</button>
    </div>
  );
};

export default Complist;