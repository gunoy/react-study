import React, { useContext } from 'react';
import {AppContext} from './App';
import { useEffect } from 'react';

const CompNum1 = () => {
  let {_num1} = useContext(AppContext)

  useEffect(()=>{
    console.log('Num1');
  })

  return (
    <span>
      {_num1}
    </span>
  );
};

export default CompNum1;