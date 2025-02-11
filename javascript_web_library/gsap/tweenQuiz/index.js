const [dom] = document.body.getClientRects();
const { width, height } = dom;

gsap.to(".a", { x: width - 100, duration: 2 });
gsap.to(".b", { y: height - 100, duration: 2 });
gsap.to(".c", { x: -width + 100, duration: 2 });
gsap.to(".d", { y: -height + 100, duration: 2 });
