import React from 'react';
import CompMenuBtn from './CompMenuBtn';
import { AppContext } from '../App';
import { useContext } from 'react';
import CompInput from './CompInput';
import CompResult from './CompResult';
import CompPoint from './CompPoint';

const CompMulty = () => {
  let {_num1,_num2} = useContext(AppContext)
  return (
    <div>
      {_num1}
      *
      {_num2}
      =
      <CompInput /><CompResult />
      <hr />
      <CompPoint />
      <hr />
      <CompMenuBtn/>
    </div>
  );
};

export default CompMulty;