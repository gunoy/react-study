import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompBtn = ({btnInfo}) => {
  let {_str,_changeStr,_changeShowError,_changeShowSorry} = useContext(AppContext)
  const fn = ()=>{
    if(btnInfo.type === 'str'){
      let str = _str
      str += btnInfo.char
      if(str.length > 30){
        _changeShowSorry(true)
      }else{
        _changeStr(str)
      }
    }else if(btnInfo.type === 'del'){
      let str = _str
      str = str.slice(0,-1)
      _changeStr(str)
    }else if(btnInfo.type === 'clear'){
      let str = _str
      str = ''
      _changeStr(str)
    }else if(btnInfo.type === 'result'){
      try{
        let str = _str
        const fnNew = new Function(`return ${str}`)
        str = fnNew()//str문자열을 계산해서 반환함
        _changeStr(parseInt(str))
      }catch{
        _changeShowSorry(true)
      }
    }  
  }
  return (
    <button onClick={fn}>
      <img
        src={`${process.env.PUBLIC_URL}/img/${btnInfo.src}.png`}
        alt=""
        draggable="false"
      />
    </button>
  );
};

export default CompBtn;