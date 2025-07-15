//getting element by his id
const Input = document.getElementById("color-picker");

//getting element by his class
const Box = document.querySelector(".box-color");
const title =document.querySelector(".title");
//Event Listener for color input
Input.addEventListener("input", function () {
  const selectColor = Input.value;
  const text =Input.value;
  title.style.color=text;
  Box.style.backgroundColor = selectColor;
});
