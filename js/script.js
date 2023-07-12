window.onload = function () {
    // 상단 스크롤 기능
    const header = document.querySelector(".header");
    const mbt = document.querySelector(".mbt");
    let scy = 0
    scy = window.document.documentElement.scrollTop;
    if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
    }
    window.addEventListener("scroll",function () {
        
    })
}