import React from 'react';

const Comp2 = ({_changeShow}) => {
  const fnChange = () => {
    _changeShow('comp1')
  }
  return (
    <div>
      Comp2
      <br />
      <button onClick={fnChange}>Comp1 출력</button>
    </div>
  );
};

export default Comp2;