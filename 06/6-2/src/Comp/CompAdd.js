import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompAdd = () => {
  let {_changeStage,_listArr,_changeListArr} = useContext(AppContext)
  let refName = useRef()
  let refAge = useRef()
  let refGender = useRef()
  const fnAddList = ()=>{
    //사람정보를 객체로 만든다
    let 아이디 = Data.now() //타임스탬프
    let 이름 = refName.current.value
    let 나이 = parseInt(refAge.current.value)
    let 성별 = refGender.current.value
    let obj = {아이디,이름,나이,성별,}
    //_listArr를 다른배열로 만든다(깊은복사)
    //_changeListArr를 이용해 값을 변경
    let arr = [..._listArr]
    arr.push(obj)
    _changeListArr(arr)
    //스테이지 화면 변경
    _changeStage('CompList')
  }
  return (
    <div>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} reftype="text" /> <br />
      성별 : <input ref={refGender} reftype="text" /> <br />
      <hr />
      <button onClick={fnAddList}>뎡단추가 후, 목록화면으로</button>
    </div>
  );
};

export default CompAdd;