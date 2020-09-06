let clicked = false
let but1 = document.querySelector(".mobile")
let nav = document.querySelector(".mobile-nav")
let navLinks = document.querySelectorAll(".mobile-nav ul li a");
let pather = document.querySelectorAll("#svg path")
for ( let i = 0; i < pather.length; i ++) {
    pather[i].style.strokeDasharray = pather[i].getTotalLength()
    pather[i].style.strokeDashoffset = pather[i].getTotalLength()
}
navLinks.forEach(link => link.addEventListener("click", function() {
    clicked = !clicked;
    but1.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
        document.querySelector(".nave").style.backgroundColor = "transparent";
        document.querySelector(".logo").style.color = "white"
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").style.color = "#5132C0"
        document.querySelector(".logo span").classList.remove("small-open")
        document.querySelector(".nave").style.position = "absolute"
        let name = document.querySelector(".name")

        let distanceTop =  name.getBoundingClientRect().top;
        if(distanceTop > 200) {
            document.querySelector(".nave").classList.remove("scrolly-mob")
        }else{
            document.querySelector(".nave").classList.add("scrolly-mob")
        }
    }
}))
function myFunction(x) {
    clicked = !clicked
    x.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"

        
        document.querySelector(".logo span").classList.add("small-open")
        document.querySelector(".nave").style.backgroundColor = "transparent";
        document.querySelector(".nave").classList.remove("scrolly-mob")
        document.querySelector(".nave").style.position = "fixed"
        
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").classList.remove("small-open")
        let name = document.querySelector(".name")
        document.querySelector(".nave").style.position = "absolute"
        let distanceTop =  name.getBoundingClientRect().top;
        if(distanceTop > 200) {
            document.querySelector(".nave").classList.remove("scrolly-mob")
        }else{
            document.querySelector(".nave").classList.add("scrolly-mob")
        }
    }
}
    
window.addEventListener("scroll", function() {
    
    let name = document.querySelector(".name");
    let distanceTop = name.getBoundingClientRect().top;
    if(distanceTop < 200 ) {
        document.querySelector(".nave").classList.add("scrolly")
        document.querySelector(".nave").classList.add("scrolly-mob")
        console.log("in viw")
    }else {
        document.querySelector(".nave").classList.remove("scrolly")
        document.querySelector(".nave").classList.remove("scrolly-mob")
    }
})
window.addEventListener("load", function() {
    function CV() {
        console.log("wisdom")
    }
    setTimeout(function() {
        document.querySelector("body").removeChild(document.querySelector(".loader"))
        document.querySelector(".mainn").style.display = "block"
    let pather = document.querySelectorAll("#svg path")
    for ( let i = 0; i < pather.length; i++) {
    pather[i].style.animation = `line-anim 3s ease forwards`
    }
    new TypeIt(".type", {
        speed: 70
      })
        .go();
        
        let name = document.querySelector(".name");
        let distanceTop = name.getBoundingClientRect().top;
        if(distanceTop < 200 ) {
            document.querySelector(".nave").classList.add("scrolly")
            document.querySelector(".nave").classList.add("scrolly-mob")
            console.log("in viw")
        }else {
            document.querySelector(".nave").classList.remove("scrolly")
            document.querySelector(".nave").classList.remove("scrolly-mob")
        }
        new WOW().init();
   
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })
    }, 3500)  

})



