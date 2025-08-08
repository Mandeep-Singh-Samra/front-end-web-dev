const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("#navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });