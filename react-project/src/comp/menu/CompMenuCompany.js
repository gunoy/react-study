import React from 'react';
import {NavLink} from 'react-router-dom';

const CompMenuCompany = () => {
  return (
    <li>
      <a href="#">Company</a>
      <ul>
        <li><NavLink to='/company/about'>인사말</NavLink></li>
        <li><NavLink to='/company/location'>오시는길</NavLink></li>
      </ul>
    </li>
  );
};

export default CompMenuCompany;