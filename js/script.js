    // 상단 스크롤 기능
    const header = document.querySelector("header");
    const mbt = document.querySelector(".mbt");
    let scy = 0;
    // 1. 스크롤바의 픽셀 위치값을 파악해서
    scy = window.document.documentElement.scrollTop;
    // 2. class 적용
    if(scy > 0) {
    header.classList.add("active");
    mbt.classList.add("active");
    }
    window.addEventListener("scroll", function() {
    scy = this.document.documentElement.scrollTop;
    if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
    }
    else {
        // 스크롤이 되지 않은 상태이면서
        const state = navMb.classList.contains("active");
        if(state) {
        // 만약에 모바일 메뉴가 펼쳐진 상태라면
        header.classList.add("active");
        mbt.classList.add("active");
        }
        else {
        // 그렇지 않다면 원래대로 처리
        header.classList.remove("active");
        mbt.classList.remove("active");
        }
    }
    });
    // 모바일 메뉴 클릭 처리
    const htmlRoot = document.querySelector("html");
    const navMb = document.querySelector(".nav-mb");
    mbt.addEventListener("click", function() {
    // 현재 ani클래스가 있는지 없는지 파악
    const state = this.classList.contains("ani");
    if(state) {
        this.classList.remove("ani");
        // 윈도우에 스크롤바가 나타난다.
        htmlRoot.classList.remove("active");
        // 모바일 메뉴 숨기기
        navMb.classList.remove("active");
        if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
        }
        else {
        header.classList.remove("active");
        mbt.classList.remove("active");
        }
    }
    else {
        this.classList.add("ani");
        htmlRoot.classList.add("active");
        navMb.classList.add("active");
        header.classList.add("active");
        mbt.classList.add("active");
    }
    });
    // 반응형 처리
    let winW = window.innerWidth;
    window.addEventListener("resize", function() {
    winW = window.innerWidth;
    if(winW > 1024) {
        mbt.classList.remove("ani");
        htmlRoot.classList.remove("active");
        navMb.classList.remove("active");
        if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
        }
        else {
        header.classList.remove("active");
        mbt.classList.remove("active");
        }
    }
    });

    // 비주얼 슬라이드
    var swiper = new Swiper (".sw-visual" , {
        effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
        delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".sw-visual-next",
        prevEl: ".sw-visual-prev",
    },
    })