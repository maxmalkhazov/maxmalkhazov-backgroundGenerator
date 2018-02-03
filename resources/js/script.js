var css    = document.querySelector(".color-text-display"),
    body   = document.querySelector("#gradient"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    randomBtn = document.querySelector(".random-btn");
    
window.onload = function() {
	displayText();
	init();
}

function init() {
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
	randomBtn.addEventListener("click", setRandom);
}

function displayText() {
	css.textContent = color1.value + "  " + "==>" + "  " + color2.value;
}
    
function setGradient() {
	displayText();
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function setRandom() {
	var hex1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var hex2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	if (hex1.length >= 7 && hex2.length >= 7) {
		color1.value = hex1;
		color2.value = hex2;
		css.textContent = hex1 + "  " + "==>" + "  " + hex2;
		body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
	} else {
		setRandom();
	}
}

