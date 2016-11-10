<<<<<<< HEAD
var mq = window.matchMedia("(max-width: 1220px)");

if (mq.matches) {
  	// window width is less than 1220px
	var nav = document.getElementsByTageName("nav")[0];
	console.log(nav);
	while (nav.firstChild) {
    	nav.removeChild(myNode.firstChild);
    }

} else {
  // window width is at least 1220px
}
=======
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
	var name1 = ["option0", "option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8"];
	var valg = ["Velg side", "Hjemmeside", "Om oss", "Hybel", "Tilbud", "Tips for studenter", "Kart", "Nyttig informasjon", "Kontakt oss"];
	var verdi =["selector", "hjemmeside", "omOss", "hybler", "tilbud", "tips", "map", "FAQ", "kontakt"];

	for (var i = 0; i < 9; i++) {
		name1[i] = document.createElement('OPTION');
		select.appendChild(name1[i]);
		name1[i].value = verdi[i];
		name1[i].innerHTML = valg[i];
	}
	select.setAttribute("onchange", "slctV(this.value)");
	document.getElementsByTagName('option')[0].disabled = "disabled";
}

function slctV(site){
	window.location= site+".html";
} 
>>>>>>> origin/master
