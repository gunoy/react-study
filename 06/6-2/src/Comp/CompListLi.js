import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompListLi = ({사람정보}) => {
  let {_listArr,_changeListArr} = useContext(AppContext)
  const fnDel = ()=>{
    //아이디가 동일하지 않은 객체들만 남긴다
    let arr = _listArr.filter((v)=>{
      return 사람정보.아이디 !== v.아이디
    })
    _changeListArr(arr)
  }
  return (
    <li>
      {사람정보.이름}
      <button onClick={fnDel}>삭제</button>
    </li>
  );
};

export default CompListLi;