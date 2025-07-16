gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});
gsap.to("#pag3", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Make canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load and draw the image
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.crossOrigin = "anonymous"; // allow cross-origin image usage

// 🖼️ Online image URL (you can change this to any PNG/JPG/GIF)
img.src =
  "https://i.pinimg.com/1200x/8f/53/2c/8f532cbb3146d625586312ac9563f077.jpg"; // change this to any image URL

let yOffset = 0;
let direction = 1;

img.onload = function () {
  const scale = 0.5;
  const imgWidth = img.width * scale;
  const imgHeight = img.height * scale;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animate up and down
    yOffset += direction * 0.5;
    if (yOffset > 20 || yOffset < -20) direction *= -1;

    const x = (canvas.width - imgWidth) / 2;
    const y = (canvas.height - imgHeight) / 2 + yOffset;

    ctx.drawImage(img, x, y, imgWidth, imgHeight);

    requestAnimationFrame(animate);
  }

  animate();
};
