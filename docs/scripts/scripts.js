
/* Autoclose language and more after leaving navBar */

let navBar = document.getElementById("navBar");
let logoSVG = navBar.getElementsByTagName("svg")[0];
let checkTime;

navBar.onmouseleave = function() {
	checkTime = setTimeout(function() {
		document.getElementById("checkArrow").checked = false;
		document.getElementById("checkLang").checked = false;
	}, 1000);
}
navBar.onmouseenter = function() {
	clearTimeout(checkTime);
};


/* Move navBar to right/left */


function navMove() {
	if (typeof (document.getElementById("navMove")) == 'undefined' || document.getElementById("navMove") == null) {
		document.head.insertAdjacentHTML("beforeend", '<style id="navMove"></style>')
	}
	if (document.getElementById("navMove").innerHTML.includes("right: 0;")) {
		document.getElementById("navMove").innerHTML = `
		@media (orientation: landscape) {
			body {
				padding: 0 0 0 4em;
			}
			#navBar {
				right: auto;
				left: 0;
			}
		}`
	} else {
		document.getElementById("navMove").innerHTML = `
		@media (orientation: landscape) {
			body {
				padding: 0 4em 0 0;
			}
			#navBar {
				right: 0;
				left: auto;
			}
		}`
	}
}



/* Portions calculator */

let portions = document.getElementById("portions");
let weights = document.querySelectorAll("#ingredients ul li span:first-of-type");

portions.querySelector("span").insertAdjacentHTML("beforeBegin", ` <button type="button" onClick="portionChange('-')">-</button> `);
portions.querySelector("span").insertAdjacentHTML("afterEnd", ` <button type="button" onClick="portionChange('+')">+</button> `);
// No JS, No buttons, No portion change

function portionChange(type) {
	var porce = portions.querySelector("span").innerHTML;
	if (type == "+") {
		weights.forEach(element => {
			if (!isNaN(element.innerHTML)) {
				element.innerHTML = Math.round((element.innerHTML * (parseInt(porce) + 1) * 100) / porce) / 100;
			}
		});
		portions.querySelector("span").innerHTML++;
	} else if (type == "-") {
		if (porce == 1) return;
		weights.forEach(element => {
			if (!isNaN(element.innerHTML)) {
				element.innerHTML = Math.round((element.innerHTML * (parseInt(porce) - 1) * 100) / porce) / 100;
			}
		});
		portions.querySelector("span").innerHTML--;
	}
}