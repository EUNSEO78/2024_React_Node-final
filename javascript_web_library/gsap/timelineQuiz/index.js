const t1 = gsap.timeline();

t1.fromTo(
  ".main > h2",
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, stagger: 0.5 }
);

// const t2 = gsap.timeline();
// t2.fromTo(".sub > h5", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
// t2.fromTo(".sub > p", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });

// const t3 = gsap.timeline();
// t3.fromTo(".test", { opacity: 0 }, { opacity: 1, duration: 2, repeat: 2, yoyo: true });
