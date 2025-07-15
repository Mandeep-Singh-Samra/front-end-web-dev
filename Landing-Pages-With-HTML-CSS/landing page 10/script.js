var active = 3;
var mncircles = document.querySelectorAll(".mncircle");
var seconds = document.querySelectorAll(".second");

// add event listener to each small circle
mncircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    // animate the circle rotation when a small circle is clicked
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
      duration: 0.5,
    });
    // call the brighten function to update the opacity of the small circles and second elements
    brighten(index);
  });
});

// function to update the opacity of the small circles and second elements
function brighten(index) {
  mncircles.forEach(function (val, i) {
    if (i === index) {
      // set the opacity of the active small circle and second element to 1
      gsap.to(val, {
        opacity: 1,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
      gsap.to(seconds[i], {
        opacity: 1,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    } else {
      // set the opacity of the inactive small circles and second elements to 0.4
      gsap.to(val, {
        opacity: 0.4,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
      gsap.to(seconds[i], {
        opacity: 0.4,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    }
  });
}

// initial animation to rotate the circle
gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});

// add event listener to the window to handle resize events
window.addEventListener("resize", function () {
  // update the circle rotation and small circle positions on resize
  gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
  });
  brighten(active);
});