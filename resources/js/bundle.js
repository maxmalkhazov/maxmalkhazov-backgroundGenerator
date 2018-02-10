(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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


},{}]},{},[1]);
