import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';
import CompMenu from '../menu/CompMenu';
import CompMenuMember from '../menu/CompMenuMember';

const CompHeader = () => {
  let {_stage} = useContext(AppContext)
  return (
    <>
      <header>
        <div className="header-top">
          <CompMenuMember/>
        </div>
        <div className="header-bottom">      
          <h1>
            <span className="hidden">리액트프로젝트</span>
            <a href={process.env.PUBLIC_URL}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/logo.png`} alt="" />
            </a>
          </h1>
          {(_stage === 'lg')&&
            <nav className='gnb gnb-lg'>
              <CompMenu/>
            </nav>
          }
          {(_stage === 'sm')&&
          <button className='mbtn'>
            <i class="bar fa-solid fa-bars-staggered"></i>
            <i class="close fa-solid fa-xmark"></i>
            </button>
          }
        </div>
      </header>
      {(_stage === 'sm')&&
        <nav className="gnb gnb-sm">
          <CompMenu/>
        </nav>
      }
    </>
  );
};

export default CompHeader;