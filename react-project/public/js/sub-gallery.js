{
  let fnMotion = () => {
    let figureArr = document.querySelectorAll('sub-gallery ul li div figure')
    figureArr.forEach((el)=>{
      let clientRect = el.getBoundingClientRect()
      let y = clientRect.y//브라우저 상단으로 부터의 거리(스크롤할 때 마다 계속 변함)
      let h = clientRect.height
      let meta = 0 + (winh*0.5 - (y+h*0.5))*0.2
      let img = el.children[0]
      img.style.transform = `translateY(${meta}%) scale(1.3)`
    })//forEach
  }//fnMotion
  fnMotion()
  window.addEventListener('scroll',()=>{
    fnMotion()
  })
  window.addEventListener('resize',()=>{
    fnMotion()
  })
}