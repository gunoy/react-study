import React from 'react';
import { noticeArr } from '../../Store/data';

const CompNotice = () => {
  return (
    <>
      <h2 className='sub-title'>공지사항</h2>
        <p className='sub-summary'>
          <span>
            <em>고객님의 소중한 의견을 주셔서 감사합니다.</em>
            <b>언제나 고객님의 눈높이에 맞추어 최상의 서비스가 되기 위해 노력하겠습니다.</b>
          </span>
       </p>
      <section className='section-notice'>
      <table className='board'>
        <thead>
          <tr>
            <th scope='col'>번호</th>
            <th scope='col'>제목</th>
            <th scope='col'>작성자</th>
            <th scope='col'>작성일자</th>
            <th scope='col'>조회수</th>
          </tr>
        </thead>
        <tbody>
          {
            noticeArr.map((v,i)=>{
              return(
                <tr key={i}>
                  <td>{v.num}</td>
                  <td>{v.title}</td>
                  <td>{v.author}</td>
                  <td>{v.date}</td>
                  <td>{v.count}</td>
                </tr>
              )
            })//map
          }
        </tbody>
        <form className='board-search'>
          <select>
            <option>제목</option>
            <option>작성자</option>
            <option>내용</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
      </table>
    </section>
    </>
  );
};


export default CompNotice;