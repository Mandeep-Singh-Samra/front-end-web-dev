/*2.EVENT AND EVENT HANDLING (Sabh to important section a eh )

  1.event:
    event means screen te koi action hoyia
    screen te kuch v hunda a oh ik event a , for exaple apa mouse to click vgera krde aw oh sabh event e hunde aw.
  2.envent handling:
    jdo v kuch screen te kuch hunda a like click vgera then apa ki kam krauna chauhnde aw click te ja ki reaction hona chahida to oh time apa nu event nu handle krna auna chahida a
  3.event listener : 
    da matbalab hai k apa ne koi action da reaction dita .
      syntax-
        //first we select the paragraph
        let h1 = document.querySelector("h1");
        h1.addEventListener("click", function () {
        h1.style.color = "red";
        console.log("clicked");
        });

        2: let p = document.querySelector("p");
            p.addEventListener("click", function () {
            p.style.color = "red";
            console.log("clicked");
            });
        3 let p = document.querySelector("p");
              p.addEventListener("dblclick", function () {
              p.style.color = "yellow";
              console.log("dblclicked");
              });
        4 let p = document.querySelector("p");
            p.addEventListener("mouseover", function () {
              p.style.color = "yellow";
              console.log("dblclicked");
            });

  -->COMMON EVENTS
    1:click
    2:input-
    
      let input = document.querySelector("input");
        input.addEventListener("input", function (dets) {
          if (dets.data !== null) {
            console.log(dets.data);
          }
        });
    3:mouseover
    4:mouseout
    5:keydown
    6:keyup
    7:change
    8:submit
  













*/
