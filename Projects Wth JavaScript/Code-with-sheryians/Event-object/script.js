function setDarkorLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  
  .addEventListener("change", function () {
    setDarkorLight();
  });


let btn = document.querySelector("#theme-toggle");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    btn.textContent = " Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    btn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
});

setDarkorLight();
