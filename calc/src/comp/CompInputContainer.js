import React from 'react';
import { btnArr } from '../store/store';
import CompBtn from './CompBtn';

const CompInputContainer = () => {
  return (
    <div className='input-container'>
      {
        btnArr.map((btnInfo)=>{
          return (
            <CompBtn key={btnInfo.id} btnInfo={btnInfo}/>
          )
        })
        //btnArr.map(btnInfo=><CompBtn/>)
      }
    </div>
  );
};

export default CompInputContainer;