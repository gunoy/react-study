import React from 'react';
import { useEffect } from 'react';

const CompN1 = ({_n1}) => {
  useEffect(()=>{
    console.log('CompN1');
  })
  return (
    <span>
      {_n1}
    </span>
  );
};

export default CompN1;