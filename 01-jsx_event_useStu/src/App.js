import React, { useEffect, useState } from 'react';

const App = () => {

  /*
  useEffect(()=>{//렌더링이 끝났을때
    document.querySelector('button').addEventListener('click',()=>{
      alert()
    })
  },[])
  */

  let [_n,_changeN] = useState(0) // let [변수,함수] = usState(초기값)
  const fnFoo = () =>{
    let n = _n
    n++
    _changeN(n)
  }

  return (
    <>
     <h1 className=''>리액트 첫수업</h1>
     <hr/>
     <button onClick={ fnFoo }>증가</button>
     <hr/>
     <p>{_n}</p>
    </>
  );
};

export default App;