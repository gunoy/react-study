import React from 'react';
import { useState } from 'react';

const App = () => {
  let [_arr,_changeArr] = useState(['a','b','c'])

  const fnAddArr = ()=>{
    let arr = [..._arr]
    arr.push('d')
    _changeArr(arr)
  }

  return (
    <>
      <ul>
        {  
          _arr.map((v,i)=>{
            return <li key={i}>{v}</li>
          })
        }
      </ul>
      <hr />
      <button onClick={fnAddArr}>배열추가</button>
    </>
  );
};

export default App;