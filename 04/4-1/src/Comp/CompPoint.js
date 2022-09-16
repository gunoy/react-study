import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompPoint = () => {
  let {_point} = useContext(AppContext)
  return (
    <div>
        점수 : {_point}
    </div>
  );
};

export default CompPoint;