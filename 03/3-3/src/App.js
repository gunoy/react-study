import React from 'react';
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {
  let [_show1,_changeShow1] = useState(true)
  let [_show2,_changeShow2] = useState(false)
  return (
    <>
      {(_show1)&&<Comp1 _changeShow1={_changeShow1} _changeShow2={_changeShow2}/>}
      {(_show2)&&<Comp2 _changeShow1={_changeShow1} _changeShow2={_changeShow2}/>}
    </>
  );
};

export default App;