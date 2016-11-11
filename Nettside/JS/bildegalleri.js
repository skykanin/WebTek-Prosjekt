const hybelpictures=document.getElementsByClassName("hybel_picture");
const pictures=[["hybel_1_1", "hybel_1_2", "hybel_1_3"],
				["hybel_2_1", "hybel_2_2", "hybel_2_3"],
				["hybel_3_1", "hybel_3_2", "hybel_3_3"]];

for(var i in hybelpictures){
	bildegalleriClick(hybelpictures[i], i);
}

//setter en funksjon til hvert bilde
function bildegalleriClick(picture, index){
	picture.onclick=function(){
		lagBildeGalleri(index)
	}
}
//selve galleriet, bytter bilde basert på index man startet med
function lagBildeGalleri(index){
	const frame=document.createElement("div"),
		background=document.createElement("div"),
		img=document.createElement("img"),
		next=document.createElement("img"),
		back=document.createElement("img"),
		exit=document.createElement("div"),
		newIndex=index;
	var	currentPicIndex=900;

	frame.id="bildeGalleriFrame";
	next.id="bildeGalleriNextButton";
	back.id="bildeGalleriBackButton";
	img.id="bildeGalleriBilde";
	background.id="bildeGalleriBakgrunn";
	exit.id="bildeGalleriExit";

	document.body.appendChild(background);
	frame.appendChild(back);
	frame.appendChild(img);
	frame.appendChild(next);
	frame.appendChild(exit);
	background.appendChild(frame);


	img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
	back.src=next.src="Content/hybel_pictures/arrow.gif";
	exit.innerHTML="&times";

	img.onload=function(){
		frame.style.width=120+this.width+"px";
		frame.style.height=this.height+"px";
		frame.style.left=window.innerWidth/2-(120+this.width)/2+"px";
		frame.style.top=window.innerHeight/2-this.height/2+"px";
		next.style.top=back.style.top=this.height/2-25+"px";
	}

	//funker å bla med piltaster, trykke på pilene, og trykke på bildet
	//kan lukke med esc, trykke på X og trykke ut av galleriet
	background.onclick=function(){				
		document.body.removeChild(background);
	}
	exit.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		document.body.removeChild(background);
	}
	next.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		currentPicIndex++;
		img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
	}
	back.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		currentPicIndex--;
		img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
	}
	img.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		currentPicIndex++;
		img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
	}
	window.onkeydown=function(e){
		if(e.keyCode=="39"){
			currentPicIndex++;
			img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
		}
		else if(e.keyCode=="37"){
			currentPicIndex--;
			img.src="Content/hybel_pictures/"+pictures[newIndex][currentPicIndex%3]+".jpg";
		}
		else if(e.keyCode=="27"){
			document.body.removeChild(background);
		}
	}


}
console.log((-1)%3)