let clicked = false
let nav = document.querySelector(".mobile-nav")
function myFunction(x) {
    clicked = !clicked
    x.classList.toggle("close");
    if(clicked) {
        
        nav.style.right = "0"
    }else {
        nav.style.right = "100%"
    }
    
    
}
    
  