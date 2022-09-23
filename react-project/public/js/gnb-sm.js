{
  let btnArr = document.querySelectorAll('.gnb-sm>ul>li>a')
  btnArr.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      e.preventDefault()
      e.currentTarget.classList.toggle('active')
      e.currentTarget.nextElementSibling.classList.toggle('active')
    })
  })
}