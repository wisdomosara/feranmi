let clicked = false
let but1 = document.querySelector(".mobile")
let nav = document.querySelector(".mobile-nav")
let navLinks = document.querySelectorAll(".mobile-nav ul li a");
navLinks.forEach(link => link.addEventListener("click", function() {
    clicked = !clicked;
    but1.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
        document.querySelector(".nave").style.backgroundColor = "transparent";
        document.querySelector(".logo span").style.color = "white"
        document.querySelector(".logo").style.color = "white"
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").style.color = "#5132C0"
        document.querySelector(".nave").style.backgroundColor = "rgba(0, 0, 0, 0.479)";
    }
}))
function myFunction(x) {
    clicked = !clicked
    x.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
        document.querySelector(".logo span").style.color = "white"
        document.querySelector(".nave").style.backgroundColor ="transparent";
        document.querySelector(".logo").style.color = "white"
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").style.color = "#5132C0"
        document.querySelector(".nave").style.backgroundColor ="rgba(0, 0, 0, 0.5)";
        
    }
}
    
window.addEventListener("scroll", function() {
    let name = document.querySelector(".name");
    let distanceTop = name.getBoundingClientRect().top;
    if(distanceTop < 200 ) {
        document.querySelector(".nave").classList.add("scrolly")
        console.log("in viw")
    }else {
        document.querySelector(".nave").classList.remove("scrolly")
    }
})