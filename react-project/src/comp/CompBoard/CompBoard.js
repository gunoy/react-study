import React from 'react';
import { boardArr } from '../../Store/data';

const CompBoard = () => {
  return (
    <>
      <h2 className='sub-title'>자유게시판</h2>
        <p className='sub-summary'>
          <span>
            <em>선샤인 자유게시판입니다.</em>
            <b>앞으로 좀 더 많은 서비스를 제공해 드릴것을 약속 드리겠습니다.</b>
          </span>
       </p>
      <section className='section-board'>
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
            boardArr.map((v,i)=>{
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

export default CompBoard;