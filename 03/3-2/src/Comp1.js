import React from 'react';

const Comp1 = (_changeShow) => {
  const fnChangeShow= () => {
    _changeShow(false)
  }
  return (
    <div>
      Comp1
      <button onClick={fnChangeShow}>Comp2로 출력</button>
    </div>
  );
};

export default Comp1;