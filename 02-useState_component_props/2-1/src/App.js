import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CompN1 from './comp/CompN1';
import CompN2 from './comp/CompN2';
import CompPoint from './comp/CompPoint';

const App = () => {
  let [_n1 ,_changeN1] = useState(0)
  let [_n2 ,_changeN2] = useState(0)
  let [_point ,_changePoint] = useState(0)
  let refInput1 = useRef()
  let refInput2 = useRef()
  let refInput3 = useRef()
  function fnSetNumber(){
    let a = Math.ceil(Math.random() * 9)
    _changeN1(a)
    let b = Math.ceil(Math.random() * 9)
    _changeN2(b)
  }//fn

  function fnResult(){
    let multy = _n1 * _n2
    let inputValue = parseInt(refInput.current.value)
    if(multy === inputValue){
      let point = _point ++
      _changePoint(point)
    }
  }
  return (
    <>
      <button onClick={fnSetNumber}>문제내기</button>
      <hr />
      <CompN1 _n1 = {_n1}/>
      {/* <span>{_n1}</span> */}
      *
      <CompN2 _n2 = {_n2}/>
      {/* <span>{_n2}</span> */}
      =
      <input ref={refInput} type="number"/>
      <hr />
      <button onClick={fnResult}>결과확인</button>
      <hr />
      <p>점수 : <CompPoint _point = {_point}/></p>
    </>
  );
};

export default App;