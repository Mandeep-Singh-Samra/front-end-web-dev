let input = document.querySelector("input");
input.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});

/*2.
  let h1 = document.querySelector("h1");
  h1.addEventListener("click", function () {
  h1.style.color = "red";
  console.log("clicked");
  });

  let p = document.querySelector("p");
  p.addEventListener("click", function () {
  p.style.color = "red";
  console.log("clicked");
  });

  let p = document.querySelector("p");
p.addEventListener("dblclick", function () {
  p.style.color = "yellow";
  console.log("dblclicked");
});

*/
