const	hybelpictures=document.getElementsByClassName("hybel_picture");

for(var i=0;i<hybelpictures.length;i++){
	bildegalleriClick(hybelpictures[i], hybler[i].picIndex);
}

//setter en funksjon til hvert bilde
function bildegalleriClick(picture, index){
	picture.onclick=function(){
		lagBildeGalleri(index);
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
	var	currentPicIndex=90000,
		clicked=false;

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


	img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
	back.src=next.src="content/hybel_pictures/arrow.gif";
	exit.innerHTML="&times";

	img.onload=function(){
		frame.style.width=120+this.width+"px";
		frame.style.height=this.height+"px";
		frame.style.left=window.innerWidth/2-(120+this.width)/2+"px";
		frame.style.top=window.innerHeight/2-this.height/2+"px";
		next.style.top=back.style.top=this.height/2-25+"px";

		window.onresize=function(){
			frame.style.width=120+img.width+"px";
			frame.style.height=img.height+"px";
			frame.style.left=window.innerWidth/2-(120+img.width)/2+"px";
			frame.style.top=window.innerHeight/2-img.height/2+"px";
			next.style.top=back.style.top=img.height/2-25+"px";
		}	
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
		img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
	}
	back.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		currentPicIndex--;
		img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
	}
	img.onclick=function(){
		event.cancelBubble=true; 
		event.stopPropagation();
		currentPicIndex++;
		img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
	}
	window.onkeydown=function(e){
		if(e.keyCode=="39" && !clicked){
			clicked=true;
			currentPicIndex++;
			img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
		}
		else if(e.keyCode=="37" && !clicked){
			clicked=true;
			currentPicIndex--;
			img.src="content/hybel_pictures/hybel_"+Number(newIndex)+"_"+Number(currentPicIndex%3+1)+".jpg";
		}
		else if(e.keyCode=="27"){
			document.body.removeChild(background);
		}
	}
	window.onkeyup=function(e){
		if(e.keyCode=="39" || e.keyCode=="37"){
			clicked=false;
		}
	}


}