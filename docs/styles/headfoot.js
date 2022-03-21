document.body.insertAdjacentHTML("afterbegin",`
<nav id="navBar">
  <input type="checkbox" id="checkArrow"><input type="checkbox" id="checkLang">
  <a href="index.html" target="_top">
   <svg version="1.1" viewBox="0 0 1024 512" xmlns="http://www.w3.org/2000/svg">
    <g stroke-linecap="round" stroke-linejoin="round" stroke-width="8" stroke="#202124">
     <path d="m152 272c-10 48-88 184-88 184-8 24 8 32 32 32h192c24 0 40-8 32-32 0 0-78-136-88-184-9.801-47.04 0-80 0-80h-80s9.801 32.96 0 80z" fill="#e8eaed"/>
     <g stroke="#052e20">
      <circle cx="192" cy="384" r="60" fill="#0a5c41"/>
      <g fill="none" stroke-width="5">
       <path d="m240 368c-16 16-48-16-64 0s16 48 0 64"/>
       <path d="m144 400c16-16 48 16 64 0s-16-48 0-64"/>
       <path d="m205 344 23 23"/>
       <path d="m187 370 23 23"/>
       <path d="m174 375 23 23"/>
       <path d="m156 401 23 23"/>
      </g>
     </g>
     <g fill="#ffa">
      <path d="m264 220-6 65h-132l-6-65s-52-9-48-60 60-47 60-47 2-68 60-68c58 0 60 68 60 68s56-4 60 47c3 48-48 60-48 60z"/>
      <g>
       <path d="m132 113s20 0 31 6"/>
       <path d="m252 113s0 16-7 28"/>
       <path d="m264 220s-30 3-44-7"/>
       <path d="m120 220s30 3 44-7"/>
      </g>
     </g>
    </g>
    <g id="logoText" fill="#202124" font-size="224px">
     <text x="330" y="260">MAKE</text>
     <text font-size="168px" text-anchor="middle"><tspan x="875" y="160">I</tspan><tspan x="875" y="285">T</tspan></text>
     <text x="370" y="460" fill="#e8eaed">EDIBLE</text>
    </g>
   </svg>
  </a>
  <a href="news.html" target="_top"><i></i><p>Novinky</p></a>
  <a href="recipes.html" target="_top"><i></i><p>Recepty</p></a>
  <a><label for="checkLang"><i></i><p>Jazyk</p></label></a>
  <nav id="langSelect">
    <a href=""><img src="../images/icons/cz.svg" alt="cz"></a>
    <a href=""><img src="../images/icons/us.svg" alt="en"></a>
    <a href=""><img src="../images/icons/de.svg" alt="de"></a>
    <a href=""><img src="../images/icons/sk.svg" alt="sk"></a>
  </nav>
  <a id="navArrow"><label for="checkArrow"><i></i><i></i></label></a>
  <a href=""><i></i><p>Oblíbené</p></a>
  <a href=""><i></i><p>Uvařeno</p></a>
  <a href=""><i></i><p>Účet</p></a>
 </nav>`);
document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",`
<footer>
  <p>&copy; 2021 stanik123</p>
</footer>`);





function navMove() {
	function navMoveCheck(marg) {
		if (typeof(document.getElementById("navMove")) != 'undefined' && document.getElementById("navMove") != null) {
			document.getElementById("navMove").innerHTML = "@media (orientation: landscape) {body { margin: " + marg + "; } }";
		} else {
			document.head.insertAdjacentHTML("beforeend", '<style id="navMove">@media (orientation: landscape) {body { margin: ' + marg + '; } }</style>')
		}
	} 
	if (document.getElementsByTagName("header")[0].style.left == "auto") {
		document.getElementsByTagName("header")[0].style.right = "auto";
		document.getElementsByTagName("header")[0].style.left = "0";
		navMoveCheck("0 0 0 4em")
	} else {
		document.getElementsByTagName("header")[0].style.right = "0";
		document.getElementsByTagName("header")[0].style.left = "auto";
		navMoveCheck("0 4em 0 0")
	}
}

let navBar = document.getElementById("navBar");
let logoSVG = document.getElementsByTagName("svg")[0];
let checkTime;

function smallLogo(logoBox) {
	if (window.matchMedia("(hover: hover)").matches) {
		logoSVG.setAttribute("viewBox", logoBox);
	}
}
/*smallLogo("0 0 384 512")*/

navBar.onmouseleave = function uncheck() {
	checkTime = setTimeout(function() {
		document.getElementById("checkArrow").checked = false;
		document.getElementById("checkLang").checked = false;
	}, 1000);
	/*smallLogo("0 0 384 512");*/
}
navBar.onmouseenter = function() {
	/*smallLogo("0 0 1024 512");*/
	clearTimeout(checkTime);
};






