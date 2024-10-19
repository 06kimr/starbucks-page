
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top')

//_.throttle(함수, 시간)을 통해서 scroll 시 delay줌
window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("scroll");
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        x: 0
      })
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100
      })
    }
  }, 300)
);

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
})

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  isHidePromotion
    ? promotionEl.classList.add("hide")
    : promotionEl.classList.remove("hide");
});

function random(min, max) {
  return parseFloat(Math.random() * (max - min) + min);
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({ triggerElement: spyEl, triggerHook: .8 }).setClassToggle(
    spyEl, 'show'
  ).addTo(new ScrollMagic.Controller());
});

