var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButt = document.querySelector("button")


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; //text content adds a text content to the DOM,
	// he adds the ; as a string to go in the textContent so that people who want to use the background
	// gradient that has been generated, can just copy and past the whole line, which will already have the
	// semi-colon put in already, and use it straight away.
}


function getRandomColor() {
    var randomColor1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient); // dont add () to the function here as we only want it to be called when the input is given, not just ran anyway regardless.

color2.addEventListener("input", setGradient);

randButt.addEventListener("click", getRandomColor);