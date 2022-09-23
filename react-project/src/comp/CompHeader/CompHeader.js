import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import CompMenu from '../menu/CompMenu';
import CompMenuMember from '../menu/CompMenuMember';
import CompGnbLg from './CompGnbLg';
import CompGnbSm from './CompGnbSm';
import CompMbtn from './CompMbtn';


const CompHeader = () => {
  let {_stage} = useContext(AppContext)
  useEffect(()=>{

  },[])
  return (
    <>
      <header>
        <div className="header-top">
          <CompMenuMember/>
        </div>
        <div className="header-bottom">      
          <h1>
            <span className="hidden">리액트프로젝트</span>
            <Link to='/'>
              <img src={`${process.env.PUBLIC_URL}/img/icon/logo.png`} alt="" />
            </Link>
          </h1>
          {(_stage === 'lg')&&<CompGnbLg/>}
          {(_stage === 'sm')&&<CompGnbSm/>}
          {(_stage === 'sm')&&<CompMbtn/>}
        </div>
      </header>

    </>
  );
};

export default CompHeader;