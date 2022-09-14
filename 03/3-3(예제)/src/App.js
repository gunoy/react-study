import React from 'react';
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {
  const [_show,_changeShow] = useState('comp1')
  let c
  if(_show === 'comp1'){
    c = <Comp1 _changeShow={_changeShow}/>
  }else if(_show === 'comp2'){
    c = <Comp2 _changeShow={_changeShow}/>
  }
  return (
    <>
      {c}
    </>
  );
};

export default App;