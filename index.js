let clicked = false
let but1 = document.querySelector(".mobile")
let nav = document.querySelector(".mobile-nav")
let navLinks = document.querySelectorAll(".mobile-nav ul li a");
navLinks.forEach(link => link.addEventListener("click", function() {
    clicked = !clicked;
    but1.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
        document.querySelector(".logo span").style.color = "white"
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").style.color = "#5132C0"
    }
}))
function myFunction(x) {
    clicked = !clicked
    x.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
        document.querySelector(".logo span").style.color = "white"
    }else {
        nav.style.right = "100%";
        document.querySelector(".logo span").style.color = "#5132C0"
    }

    
}
    
  