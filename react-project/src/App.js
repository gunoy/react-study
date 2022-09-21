import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import CompHeader from './Comp/CompHeader/CompHeader';
import Compfooter from './Comp/CompFooter/Compfooter';
import CompHome from './Comp/CompHome/CompHome';
import CompBizArea from './Comp/CompBizArea/CompBizArea';
import CompBizIntro from './Comp/CompBusiness/CompBizIntro';
import CompSubWrap from './Comp/CompSubWrap/CompSubWrap';
import Comp404 from './Comp/Comp404/Comp404';
import CompAbout from './Comp/CompAbout/CompAbout';
import CompLocation from './Comp/CompLocation/CompLocation';
import CompNotice from './Comp/CompNotice/CompNotice';
import CompQNA from './Comp/CompQNA/CompQNA';
import CompBoard from './Comp/CompBoard/CompBoard';
import CompContact from './Comp/CompContact/CompContact';
import CompGallery from './Comp/CompGallery/CompGallery';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';

export const AppContext = createContext()

const App = () => {
  const [_stage,_changeStage] = useState('lg')
  const fnSetStage = () => {
    if(matchMedia('screen and (min-width:1000px)').matches){
      _changeStage('lg')
    }else{
      _changeStage('sm')
    }
  }
  useEffect(()=>{
    fnSetStage()
    window.addEventListener('resize',()=>{
      fnSetStage()
    })
  },[])
  return (
    <BrowserRouter>
    <AppContext.Provider value={{_stage}}>
        <CompHeader/>
          <Routes>
          <Route path='/' element={<CompHome/>}/>

          <Route path='/company' element={<Comp404/>}/>
          <Route path='/company' element={<CompSubWrap/>}>
            <Route path='about' element={<CompAbout/>}/>{/* 중첩 Route에는 /를 쓰면 안됨 */}
            <Route path='location' element={<CompLocation/>}/>
          </Route>

          <Route path='/biz' element={<Comp404/>}/>
          <Route path='/biz' element={<CompSubWrap/>}>
            <Route path='intro' element={<CompBizIntro/>}/>
            <Route path='area' element={<CompBizArea/>}/>
          </Route>

          <Route path='/product' element={<Comp404/>}/>
          <Route path='/product' element={<CompSubWrap/>}>
            <Route path='gallery' element={<CompGallery/>}/>
          </Route>

          <Route path='/online' element={<Comp404/>}/>
          <Route path='/online' element={<CompSubWrap/>}>
            <Route path='contact' element={<CompContact/>}/>
          </Route>

          <Route path='/comunity' element={<Comp404/>}/>
          <Route path='/comunity' element={<CompSubWrap/>}>
            <Route path='notice' element={<CompNotice/>}/>
            <Route path='qna' element={<CompQNA/>}/>
            <Route path='board' element={<CompBoard/>}/>
          </Route>

          <Route path='*' element={<Comp404/>}/>
        </Routes>
        <Compfooter/>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;