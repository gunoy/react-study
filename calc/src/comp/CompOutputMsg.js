import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompOutputMsg = () => {
  let {_changeShowSorry} = useContext(AppContext)
  return (
    <div className='msg-output' onClick={()=>{_changeShowSorry(false)}}>
      <img src={`${process.env.PUBLIC_URL}/img/sorry.png`} alt="" />
    </div>
  );
};

export default CompOutputMsg;