window.onload = function() {
//body내의 태그를 읽은 후 main.js를 읽음

    const textEl = document.getElementById("demo");

    // window 사이즈가 변할 때마다 발생"resize"
    window.addEventListener("resize", function(){
        window.innerWidth >= 960
        ? (textEl.innerHTML = "데스크탑")
        : window.innerWidth >= 768
        ? (textEl.innerHTML = "테블릿 PC")
        : (textEl.innerHTML = "스마트 폰");
    });
};