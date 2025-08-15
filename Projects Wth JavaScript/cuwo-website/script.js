const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

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
  });
}
first();
let circle = document.querySelector("#mini-circle");
function cricleMove() {
  window.addEventListener("mousemove", function (dets) {
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}
cricleMove();

let elem = document.querySelectorAll(".elem");
elem.forEach(function (elem) {
  elem.addEventListener("mousemove", function (dets) {
    console.log(dets.clientY - elem.getBoundingClientRect().top);
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      duration: 1,
      scale: 1.5,
      left: dets.clientX,
      ease: Expo.Power1,
    });
  });
});
elem.forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 1,
      ease: Expo.Power1,
    });
  });
});
