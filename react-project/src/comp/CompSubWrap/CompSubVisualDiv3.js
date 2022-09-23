import React from 'react';

const CompSubVisualDiv3 = () => {
  return (
    <div>
      <div className='textbox'>
        <h6>갤러리</h6>
        <p>
          차별화된 전문 디자인 경험과 모바일 환경을 고려한
          컨텐츠 최적화 홈페이지 전문회사입니다
        </p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/sub/sub03.jpg`} alt="" />
    </div>
  );
};

export default CompSubVisualDiv3;