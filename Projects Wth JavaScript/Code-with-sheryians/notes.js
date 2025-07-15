/* 1.dom manipulation

    1-html se element select karna
      1.querys and querysall are main in this section
      const element = document.getElementById("element");

      2-ehde nal apa id nal element nu select kr skde aw
      const element2 = document.querySelector(".element");

      3-ehde nal apa jive tag a h1 ohna nu select kr skde aw

        const element3 = document.querySelectorAll(".element");

          1-ehde nal jinne v tag ne h1 ohna nu select kr skde     aw , bakki j check krna hove k emement a jehda select ho gya k na , tn fir ehnu variable ch store krake ohnu console.log nal print krwa sakde aw te console ch check kr skde aw v ho v gya a select k  nahi 
          2-ehdi example a jive syntax di 
          3-syntax example
            let abcd = document.querySelectorAll("h1");
          console.dir(abcd);


    2-html ka text badlna
      element.innerHTML = "hello world";
      element2.innerHTML = "hello world";

    3-html ko badlna
      element.style.color = "red";
      element2.style.color = "red";

    4-css badlna
      element.style.fontSize = "2rem";
      element2.style.fontSize = "2rem";

    5-html me kuch add krna
      element.innerHTML += "hello world";

    6-html se kuch remove karna
      element.innerHTML = element.innerHTML.replace("hello", "bye");

    7-html se kuch replace karna
      element.innerHTML = element.innerHTML.replace("hello", "bye");

    8-attribute badlna
      element.setAttribute("src", "https://example.com/image.jpg");
      element.setAttribute("width", "100");
      element.setAttribute("height", "100");

    9-event listener add krna ache se
      element.addEventListener("click", function () {
      console.log("clicked");
      });
*/
