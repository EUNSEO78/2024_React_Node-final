gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".second",
    scrub: true,
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

tl.fromTo("article", { x: 0 }, { x: "-2000vw", duration: 10 });
