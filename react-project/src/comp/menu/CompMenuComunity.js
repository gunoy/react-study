import React from 'react';
import {NavLink} from 'react-router-dom';

const CompMenuComunity = () => {
  return (
    <li>
      <a href="#">comunity</a>
      <ul>
        <li><NavLink to='/comunity/notice'>공지사항</NavLink></li>
        <li><NavLink to='/comunity/qna'>질문과답변</NavLink></li>
        <li><NavLink to='/comunity/board'>자유게시판</NavLink></li>
      </ul>
    </li>
  );
};

export default CompMenuComunity;