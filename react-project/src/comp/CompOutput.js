import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { charArr,imgArr } from '../store/store';

const CompOutput = () => {
  let {_str} = useContext(AppContext)
  return (
    <div className='output-container'>
      <img className='bg-output' src={`${process.env.PUBLIC_URL}/img/output.png`} alt="" />
      <p className='output'>
        {
          _str.split('').map((v,i)=>{ //1+2*3을 입력하면 => ['1','+','2','*','3']인 배열로 출력
            let index = charArr.indexOf(v)//charArr의 v번째 있는 객체를 찾는다
            let fileName = imgArr[index]
            return <img src={`${process.env.PUBLIC_URL}/img/${fileName.png}`} key={i} alt="" />
          })
        }
      </p>
    </div>
  );
};

export default CompOutput;