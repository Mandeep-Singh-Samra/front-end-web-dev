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
      1-innerText --> text badlda a
      2-textConetent --> text badlda a
      3-innerHTML --> html likh sakde aw apa ehder andr and tn krke eh html nu bdl skda aw andrle nu 
        syntax-  
          let hero = document.querySelector("h1");
          hero.innerHTML = "<button>hello Mendy ki hall a</button>";
      
          1.ehde vich apa ne pehlan h1 nu select kr lya   te hero naam de variable de vich store kr dita ,fer apa ne hero. lake nal textContent naam ni property use kri jehde nal apa html de andr da text change kr skde aw jehda apa ne select krya hoyia a 

            let hero = document.querySelector('h1');
            hero.textContent = "hello Mendy ki hall a";

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

    2.1-attribue-  ohna nu kehnde aw apa jehde tag to bina nal appa likhe hunde aw oh attribute hunde aw  for example  <a href=""> ehde vich 'href' attribute a 
    2.1-Attribute manipulation - apa ohnu kehnde aw jdo apa JavaScript de through attribute di value bdl dyie ja add kr dyie ja update kr dyie , ohnu bs apa attribute manipulation kehnde aw.
    syntax -
      let a = document.querySelector("a");
      a.href = "https://www.google.com";
    pro-syntax-
      let a = document.querySelector("a");
      a.setAttribute("href", "https://www.google.com")

    pro-syntax-2-
      let img = document.querySelector("img");
      img.setAttribute(
      "src",
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png"
      );
        1-getAttribute
        2-setAttribute
        3-removeAttribute

        1-getAttribute--
          ehde nal apa a tag de vich href ohnu ikale nu special select kr skde aw, getAttribute a jehda oh value nu get kr lenda a jdo apa kehne a a.getAttribute("href");
          console.log nal apa ne ehnu print krwa k dekh k lya k  ehne ki value select kri a

          syntax-
            let a = document.querySelector("a");
            console.log(a.getAttribute("href"));

        2-setAttribute-
          setAttribute nal apa jive a tag de vich href and img tag de vich src a ohna di value apa JavaScript de rahi set kr skde aw jive ehde naam to v pta lagda e a , bakki value j html ch ditti v hovi ohnu v apa change kr skde aw .
            pro-syntax-
              let a = document.querySelector("a");
              a.setAttribute("href", "https://www.google.com")

            pro-syntax-2-
              let img = document.querySelector("img");
              img.setAttribute(
              "src",
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png"
              );
        3-removeAttribute-
          ehde nal apa kise v attribute di value a jehdi ohnu remove kr skde aw , jehdi html de vich diti hundi a apa for example img de src vich kujh dita hove ohnu chak sakde aw ehde nal apa 
            syntax-
              let img = document.querySelector("img");
              img.removeAttribute("src");
            syntax-2-
              let a = document.querySelector("a");
              a.removeAttribute("href");
  2.Dynamic Attribute Manipulation-
    1-createElement
    2-appendChild
    3-removeChild
    4-prependChild

    1-createElement - apa ehda use html create krn lyi krde aw for example apa h1 create krna a tn ehda syntax ah houga
      let h1 = document.createElement("h1");
      h1.textContent = "hello world";
      console.log(h1);

      textContent - jehda apa ehde vich use krya aw oh html de tag andar text vgera add krn de kam aunda a
    
    2-appendChild- j apa html de element nu show krauna hove apne display te fer apa appendChild use krde aw , eh script tag to baad bich add hou ga code de
      let h1 = document.createElement("h1");
      h1.textContent = "hello world";
      console.log(h1);
      document.body.appendChild(h1);
    
    3-prependChild- j apa html de element nu show krauna hove apne display te fer apa prependChild use krde aw , eh script tag to pehlan  add hou ga code vich 
      let h1 = document.createElement("h1");
      h1.textContent = "hello world";
      console.log(h1);
      document.body.prepend(h1);

    4.removeChild-just use the remove to remove as simple as that

  3-style updates 
    1.style -
    js se css badla .style di help nal 
    sytanx-
      let h1 = document.querySelector("h1");
      h1.style.color = "red";
      h1.style.fontSize = "3rem";
      apa CSS da kuch v change kr skde aw element de nal .style lake 
      syntax-
        let bg = document.querySelector("body");
        bg.style.backgroundColor = "black";
    2-classList -
      ehde vich apa CSS de vich jehdia apa classes ditia hundia ne ohna nu kr skde aw JS vich ,jive apa css di koi class nu js de rahi kise element te apply krna chauhna tn apa classList use krde aw
      syntax-
        let bg = document.querySelector("body");
        bg.classList.add("clr");
      clr ehde apne kol css di class a jehnu apa use krya aw css nu js rahi change krn lyi 
        1-.add() 
          ehde vich apa ne .add() naam da method use krya a class add krn lyi 
        2-.remove()
          apa ehde vich j .remove method da use krde tn apa html de vich koi v element te laggi hoyi class nu htta v sakde aw 
        3-.toggle()
          toggle a jehda eh kam krda aw putha j tn class lagi hove fer tn htta dinda  , j na laggi hove koi class fer la dinda 

--> 'getElementById' and 'querySelector' de vich main difference eh hunda a k getElementById ch apa nu sirf naam dena penda a , but querySelector ch apa sara kuch select kr skde aw jive class tag element id sara kuch with help of  for example apa nu ehde vich class lyi . launa penda a te id lyi # tag , 
  main gal a jehdi querySelector a jehda oh vadh kam da a

    -->querySelectorAll - nu apa odo use krde aw jdo apa same class ja id  de mutltiple values like buttons vgera jehna sareya te apa oh class use krni hundi a fer apa ehda use krde awe 
    syntax-
      let button = document.querySelectorAll(".buy-btn");
      
      ehde nal apa jine v button ne jehda vich buy-btn naam di class use hoyi hoyi a ohna nu select kr lya a , te select krn to baad agge apa jo marji changes kr skde aw .

  ->  'textContent'
      'innerText '
      'innerHTML'
        main difference -
          eh hunda a k innHTMl de vich apa html tags use kr skde aw  but textContent and innerText de andar apa sirf text hi add kr skde aw ehde ch apa html de tag ni add kr skde 






*/
