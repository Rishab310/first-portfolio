let x = document.getElementById("myTopNav");
let welcome = document.getElementById("welcome");
let menu = document.getElementById("navbut");
menu.onclick =  function() {
    if(x.style.height !== "auto") {
        x.style.height = "auto";
    }
        else {
            x.style.height = "51px";
        }
    if(welcome.style.display !== "none"){
        welcome.style.display = "none";
    }
    else {
        welcome.style.display = "inline";
    }
}

window.onscroll = function() 
    {
        welcome.style.display = "none"
    }
        