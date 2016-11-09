// JavaScript Media Queries
var mql = window.matchMedia("(max-width: 1000px)");
mql.addListener(WidthChange);
WidthChange(mql);


// media query change
function WidthChange(mql) {
	if(mql.matches) {
		// window width is maximum 1000px
		var navbar = document.getElementById("navbar");
		navbar.style.display = "none";
		if (document.getElementById("select")) {
			document.getElementById("select").style.display = "";
		} else {
			Createdropdown();
		}
		console.log("Changed display of navbar to none");	
	} else {
		// window width is greater than 1000px
		var navbar = document.getElementById("navbar");
		navbar.style.display = "";
		var select = document.getElementById("select");
		select.style.display = "none";
		console.log("Changed display of navbar to visible");
	}
}

// dropdown menu
function Createdropdown(){
	var nav = document.getElementsByTagName('nav')[0];
	var select = document.createElement('SELECT');
	nav.appendChild(select);
	select.id = "select";
	var name1 = ["option1", "option2", "option3", "option4", "option5", "option6", "option7"];
	var name2 = ["a1", "a2", "a3", "a4", "a5", "a6", "a7"];
	var valg = ["Om oss", "Hybel", "Tilbud", "Tips for studenter", "Kart", "Nyttig informasjon", "Kontakt oss"];
	var verdi =["OmOss", "hybler", "tilbud", "tips", "map", "info", "kontakt"];

	for (var i = 0; i < 7; i++) {
		name1[i] = document.createElement('OPTION');
		select.appendChild(name1[i]);
		name1[i].value = verdi[i];
		name2[i] = document.createElement('A');
		name1[i].appendChild(name2[i]);
		name2[i].innerHTML = valg[i];
		name2[i].href = "/";
	}
	select.setAttribute("onchange", "slctV(this.value)");
}

function slctV(elm){
	window.alert("value changed to: " + elm);
	window.location= elm+".html";
} 