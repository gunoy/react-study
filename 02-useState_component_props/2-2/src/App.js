import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const App = () => {
  let [_point,_changePoint] = useState(0)
  let refInput1 = useRef()
  let refInput2 = useRef()
  let refInput3 = useRef()
  function fnResult(){
    let n1 = parseInt(refInput1.current.value)
    let n2 = parseInt(refInput2.current.value)
    let n3 = parseInt(refInput3.current.value)
    if(n3 === n1 + n2){
      let point = _point ++
      _changePoint(point)
    }else{
      let point = _point --
      _changePoint(point)
    }
  }
  return (
    <>
      <input ref={refInput1} type="number" /> 
      +
      <input ref={refInput2} type="number" />
      =
      <input ref={refInput3} type="number" />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <hr />
      <p> 점수 : {_point}</p>
    </>
  );
};

export default App;