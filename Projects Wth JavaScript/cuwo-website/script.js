const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
let circle = document.querySelector("#mini-circle");

function first() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-20vh",
    opacity: 0,
    scale: 1,
    ease: Expo.easeInOut,
    duration: 1,
  });
  var tl = gsap.timeline();
  tl.from("#heading", {
    x: "-100vh",
    opacity: 0,
    scale: 1.5,
    duration: 2.5,
    ease: Expo.easeInOut,
  });
  var tl = gsap.timeline();
  tl.from("#small-heading", {
    x: "100vh",
    opacity: 0,
    scale: 1.5,
    duration: 3,
    ease: Expo.easeInOut,
  })
}
first();



function cricleMove() {
  window.addEventListener("mousemove", function (dets) {
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}
cricleMove();
