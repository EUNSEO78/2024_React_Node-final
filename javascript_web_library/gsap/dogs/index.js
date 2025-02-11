gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const firstTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: "#first",
    markers: true,
    scrub: true,
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

firstTimeLine
  .to(".album > img", { rotate: "720deg", scale: 0, borderRadius: "9999px" })
  .to(".album > img", { rotate: "0deg", scale: 1, borderRadius: "0px" });
