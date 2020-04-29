var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Random"));
body.appendChild(btn);

function toHex(x) {
    var hex = x.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function randomCreation() {
    r1 = toHex(Math.floor(Math.random() * 256));
    g1 = toHex(Math.floor(Math.random() * 256));
    b1 = toHex(Math.floor(Math.random() * 256));
    r2 = toHex(Math.floor(Math.random() * 256));
    g2 = toHex(Math.floor(Math.random() * 256));
    b2 = toHex(Math.floor(Math.random() * 256));
    a = "#" + r1 + g1 + b1;
    b = "#" + r2 + g2 + b2;
    return {
        a: a,
        b: b
    }
    
}

function setColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

btn.addEventListener("click", function () {
    color1.value = randomCreation().a;
    color2.value = randomCreation().b; 
    setColor();
})
 



color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

