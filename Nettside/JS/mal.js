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