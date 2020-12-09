// Really wanted a nice fade-in for the background, got assistance from a friend with JS experience to make this

var myVar;
n = new Date();

function initFunction() {
    myVar = setTimeout(showPage, 150);
    document.getElementById("date").innerHTML = n.getFullYear()
}

// Tried to get it to automatically update the year, not functional as of now

function showPage() {
    document.getElementById("bg").style.visibility = "visible";
    document.getElementById("bg").style.opacity = "0.5";
    document.getElementById("bg").style.transition = "all 1s";
}