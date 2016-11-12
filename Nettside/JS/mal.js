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
// dropdown menu function
function Createdropdown(){
	var nav = document.getElementsByTagName('nav')[0];
	var select = document.createElement('SELECT');
	nav.appendChild(select);
	select.id = "select";

	var name1 = ["option0", "option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8"];
	var valg = ["Velg side", "Hjemmeside", "Om oss", "Hybel", "Tilbud", "Tips for studenter", "Kart", "Nyttig informasjon", "Kontakt oss"];
	var verdi =["selector", "index", "OmOss", "hybler", "tilbud", "Tips", "map", "FAQ", "kontakt"];
	for (i = 0; i < 9; i++) {
		name1[i] = document.createElement('OPTION');
		select.appendChild(name1[i]);
		name1[i].value = verdi[i];
		name1[i].innerHTML = valg[i];
	}
	select.setAttribute("onchange", "slctV(this.value)");
	document.getElementsByTagName('option')[0].disabled = "disabled";
}
// list of option tag values
var verdi =["selector", "hjemmeside", "omOss", "hybler", "tilbud", "tips", "map", "FAQ", "kontakt"];
// function that loads the selected html site
function slctV(site){
	window.location= site+".html";
	disable(site);

}

window.onload = function disable(){
	var current = window.location.href;
	var filename = current.replace(/^.*[\\\/]/, '');
	filename = filename.slice(0, -5);
	/*var server = "http://folk.ntnu.no/nicholvj/public%20html/hjemmeside.html";
	if (current.length > server.length) {
		var current = current.slice("file:///C:/Users/Nicholas%20Jaunsen/Documents/GitHub/WebTek-Prosjekt/Nettside/".length);
	} else if (current.length < server.length || current.length == server.length) {
		var current = current.slice("http://folk.ntnu.no/nicholvj/public%20html/".length);
	}
	var current = current.slice(0,current.length-5);*/
	console.log("navnet på option taggen selected attributten skal inn i er "+filename);
	document.getElementsByTagName('option')[verdi.indexOf(filename)].selected = "true";
}
