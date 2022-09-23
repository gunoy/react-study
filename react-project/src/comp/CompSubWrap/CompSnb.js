import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';
import CompMenuBiz from '../menu/CompMenuBiz';
import CompMenuCompany from '../menu/CompMenuCompany';
import CompMenuComunity from '../menu/CompMenuComunity';
import CompMenuOnline from '../menu/CompMenuOnline';
import CompMenuPrd from '../menu/CompMenuPrd';

const CompSnb = () => {
  let {pathArr} = useContext(AppContext)
  let menuCategory = pathArr[1]
  return (
    <nav className='snb'>
      <ul>
        {menuCategory === 'company'&&<CompMenuCompany/>}
        {menuCategory === 'biz'&&<CompMenuBiz/>}
        {menuCategory === 'online'&&<CompMenuPrd/>}
        {menuCategory === 'product'&&<CompMenuOnline/>}
        {menuCategory === 'comunity'&&<CompMenuComunity/>}
      </ul>
    </nav>
  );
};

export default CompSnb;