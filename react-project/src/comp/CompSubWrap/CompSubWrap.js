import React from 'react';
import {Outlet} from 'react-router-dom';
import CompSnb from './CompSnb';
import CompSubVisual from './CompSubVisual';
import { useContext } from 'react';
import { AppContext } from '../../App';

const CompSubWrap = () => {
  let {pathArr} = useContext(AppContext)
  return (
    <>
      {pathArr[2]}
      <CompSubVisual/>
      <CompSnb/>
      <main className='sub-content'>
        <Outlet/>
      </main>
    </>
  );
};

export default CompSubWrap;