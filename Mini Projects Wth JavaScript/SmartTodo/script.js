const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleBtn");

let on = false;

button.addEventListener("click", function () {
  on = !on; // Flip the switch

  if (on) {
    bulb.classList.add("on");
    button.textContent = "Turn OFF";
  } else {
    bulb.classList.remove("on");
    button.textContent = "Turn ON";
  }
});
