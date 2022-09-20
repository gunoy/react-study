import React from 'react';
import { useContext } from 'react';
import App, { AppContext } from './App';

const CompResult = () => {
  let {_point} = useContext(AppContext)
  return (
    <div>
      결과 : {_point}점
    </div>
  );
};

export default CompResult;