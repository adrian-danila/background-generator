let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodyGradient = document.getElementById("bodyGradient");
// bodyGradient.style.background = "red";

color1.addEventListener("input", function(){
    bodyGradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function() {
    bodyGradient.style.background = "linear-gradient(to right, "+ color1.value + "," + color2.value + ")";
})