let x = document.getElementById("myTopNav");
let welcome = document.getElementById("welcome");
let menu = document.getElementById("navbut");
menu.onclick =  function() {
    if(x.style.height !== "auto") {
        x.style.height = "auto";
        welcome.style.display = "none";
    }
        else {
            x.style.height = "51px";
        }
    }
window.onscroll = function() {
    if (window.pageYOffset > 60) {
        welcome.style.display = "none"
    }
    else {
        welcome.style.display = "inline";
    }
}