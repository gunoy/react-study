import React from 'react';
import CompMenuBiz from './CompMenuBiz';
import CompMenuCompany from './CompMenuCompany';
import CompMenuComunity from './CompMenuComunity';
import CompMenuOnline from './CompMenuOnline';
import CompMenuPrd from './CompMenuPrd';

const CompMenu = () => {
  return (
    <ul>
      <CompMenuCompany/>
      <CompMenuBiz/>
      <CompMenuOnline/>
      <CompMenuPrd/>
      <CompMenuComunity/>
    </ul>
  );  
};

export default CompMenu;