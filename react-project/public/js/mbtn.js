{
  let isToggle = true
  let gnb = document.querySelector('.gnb-sm')
  let subMenuArr = document.querySelectorAll('.gnb-sm>ul>li>ul')
  let btnArr = document.querySelectorAll('.gnb-sm>ul>li>a')
  let timeoutID
  document.querySelector('.mbtn').addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active')
    subMenuArr.forEach((subMenu)=>{
      subMenu.classList.remove('active')
    })
    btnArr.forEach((btn)=>{
      btn.classList.remove('active')
    })
    if(isToggle === true){
      gnb.classList.add('active1')//block
      clearTimeout(timeoutID)
      timeoutID = setTimeout(()=>{
        gnb.classList.add('active2')//opacity 1
      },1)
    }else{
      gnb.classList.remove('active2')
      timeoutID = setTimeout(()=>{
        gnb.classList.remove('active2')
      },1)
    }
    isToggle = !isToggle
  })//mbtn
}