let button = document.querySelector("#startBtn");
let progress = document.querySelector(".progress");
let percent = document.querySelector(".percent");
button.addEventListener("click", function () {
  {
    let count = 0;
    setInterval(function () {
      if (count < 100) {
        count++;
        progress.style.width = count + "%";
        progress.textContent = count + "%";
        percent.textContent = count + "%";
        console.log("Count: " + count);
      } else {
        console.log("Count reached 100, stopping.");
        clearInterval(count);
      }
    }, 30);
  }
});
