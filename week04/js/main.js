// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById("btn--open")
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById("btn--close")

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.diaplay="none"
    menuCloseEl.style.diaplay="block"
})
menuCloseEl.addEventListener("click", function() {
    menuCloseEl.style.diaplay="none"
    menuOpenEl.style.diaplay="block"
})