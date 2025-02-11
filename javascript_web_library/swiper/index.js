const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 3000, // 3초마다 자동 전환
    disableOnInteraction: false,
  },
  speed: 10000, // 전환 애니메이션 속도
});

// 기능 20% 알면 다씀
const target = document.querySelector("#target");
target.addEventListener("mouseover", () => {
  swiper.slideNext(1000);
});
