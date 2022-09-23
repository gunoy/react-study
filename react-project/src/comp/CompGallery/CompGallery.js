import React from 'react';
import { useEffect } from 'react';
import { galleryArr } from '../../Store/data';

const CompGallery = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/sub-gallery.js`;
    document.body.appendChild(script);
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <>
    <h2 className='sub-title'>갤러리</h2>
      <p className='sub-summary'>
        <span>
          <em>갤러리 및 시공사례입니다.</em>
          <b>갤러리 및 시공사례입니다.</b>
        </span>
      </p>
      <section className='sub-gallery'>
        <ul>
          {
            galleryArr.map((v,i)=>{
              return(
                <li key={i}>
                  <div>
                    <figure>
                      <img src={`${process.env.PUBLIC_URL}${v.src}`} alt="" />
                    </figure>
                    <a href="#">
                      <h3>{v.title}</h3>
                    </a>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <form className='board-search'>
          <select>
            <option>제목</option>
            <option>작성자</option>
            <option>내용</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>

      </section>
    </>
  );
};

export default CompGallery;