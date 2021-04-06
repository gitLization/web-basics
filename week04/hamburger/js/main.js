// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네이게이션 선택자
const sideMenuEl = document.getElementById('side__menu')

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.diaplay='none'
    menuCloseEl.style.diaplay='block'
    sideMenuEl.style.transform='translate(0)'
})

menuCloseEl.addEventListener("click", function() {
    menuOpenEl.style.diaplay='block'
    menuCloseEl.style.diaplay='none'
    sideMenuEl.style.transform='translate(-100)'
})