import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompInput = () => {
  let {refInput} = useContext(AppContext)
  return (
    <>
      <input type="number" size='1' ref={refInput} />
    </>
  );
};

export default CompInput;