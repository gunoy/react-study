import React from 'react';
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {
  let [_show,_changeShow] = useState(true)
  return (
    <>
      {
      (_show)
      ?
      <Comp1 _changeShow={_changeShow}/>
      :
      <Comp2/>
      }
    </>
  );
};

export default App;