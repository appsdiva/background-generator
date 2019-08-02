var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function updateHexCode() {
	updateValue(document.querySelector('#value1'), color1.value);
	updateValue(document.querySelector('#value2'), color2.value);	
}
function updateValue(element, value){
	element.textContent = value;	
	element.setAttribute('style','color:' + value);
}

document.addEventListener('DOMContentLoaded', function(){
	
	updateBackground();	
});