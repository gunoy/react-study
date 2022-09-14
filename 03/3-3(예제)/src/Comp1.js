import React from 'react';

const Comp1 = ({_changeShow}) => {
  const fnChange = () => {
    _changeShow('comp2')
  }
  return (
    <div>
      Comp1
      <br />
      <button onClick={fnChange}>Comp2 출력</button>
    </div>
  );
};

export default Comp1;