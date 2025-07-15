//dom manipulation
//html se element select karna
//querys and querysall are main in this section
const element = document.getElementById("element");
const element2 = document.querySelector(".element");
const element3 = document.querySelectorAll(".element");

//html ka text badlna
element.innerHTML = "hello world";
element2.innerHTML = "hello world";

//html ko badlna
element.style.color = "red";
element2.style.color = "red";

//css badlna
element.style.fontSize = "2rem";
element2.style.fontSize = "2rem";

//html me kuch add krna
element.innerHTML += "hello world";

//html se kuch remove karna
element.innerHTML = element.innerHTML.replace("hello", "bye");

//html se kuch replace karna
element.innerHTML = element.innerHTML.replace("hello", "bye");

//attribute badlna
element.setAttribute("src", "https://example.com/image.jpg");
element.setAttribute("width", "100");
element.setAttribute("height", "100");

//event listener add krna ache se
element.addEventListener("click", function () {
  console.log("clicked");
});
