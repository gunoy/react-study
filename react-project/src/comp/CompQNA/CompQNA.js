import React from 'react';
import { qnaArr } from '../../Store/data';

const CompQNA = () => {
  return (
    <>
      <h2 className='sub-title'>질문과답변</h2>
      <p className='sub-summary'>
        <span>
          <em>선샤인 질문과 답변입니다.</em>
          <b>질문에 대한 궁금증을 해결해드립니다.</b>
        </span>
      </p>
      <section className="sub-qna">
        {
          qnaArr.map((v,i)=>{
            return(
              <details key={i}>
                <summary>
                  {v.q}
                </summary>
                <p>
                  {v.a}
                </p>
              </details>
            )
          })
        }
      </section>
    </>
  );
};

export default CompQNA;