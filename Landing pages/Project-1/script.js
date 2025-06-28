var crsr =document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        duration:0.3,
        x:dets.clientX,
        y:dets.clientY,
        ease:"sine.out"
    })
    gsap.to("#cursor-blur",{
        duration:0.3,
        delay:0.1,
        x:dets.clientX,
        y:dets.clientY,
        ease:"sine.out"

    })
})
gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3 
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})
