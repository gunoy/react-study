let scrt
let winh

let fnWindow = ()=>{
  scrt = window.scrollY
  winh = window.innerHeight
}
fnWindow()
window.addEventListener('scroll',()=>{
  fnWindow()
})
window.addEventListener('resize',()=>{
  fnWindow()
})
