import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompErrorMsg = () => {
  let {_changeShowError} = useContext(AppContext)
  return (
    <div className='msg-error' onClick={()=>{_changeShowError(false)}}>
      <img src={`${process.env.PUBLIC_URL}/img/oops.png`} alt="" />
    </div>
  );
};

export default CompErrorMsg;