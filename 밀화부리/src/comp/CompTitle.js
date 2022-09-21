import React from 'react';

const CompTitle = () => {
  return (
    <h1>
      <img src={`${process.env.PUBLIC_URL}/img/title.png`} alt="" />
    </h1>
  );
};

export default React.memo(CompTitle);//해당 객체와 관련된 변수가 바뀔때만 업데이트됨