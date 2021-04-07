// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네이게이션 선택자
const sideMenuEl = document.getElementById('side__menu')

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.display = 'none'
    menuCloseEl.style.display = 'block'
    // 이부분이 잘 안먹히는 것 같은데
    sideMenuEl.style.transform = 'translateX(0%)'
})

menuCloseEl.addEventListener("click", function() {
    menuOpenEl.style.display = 'block'
    menuCloseEl.style.display = 'none'
    sideMenuEl.style.transform = 'translateX(-100%)'
})