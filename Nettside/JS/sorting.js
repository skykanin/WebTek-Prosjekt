var	hybel1={
		inner:" <p class='hybelListHeader'>Leilighet med tre hybler. Perfekt for studenter midt i sentrum av Trondheim. Ligger rett ved Trondheim Torg. Alt er i nærheten. Buss rett utenfor bygget med lett tilgang til Dragvoll, NTNU og BI.</p><ul><li>Etasje: 3.</li><li class='leie'>Månedsleie: 6000,-</li><li class='kvadrat'>Primærrom: 15 m²</li><li class='soverom'>Soverom: 1</li><li>Delvis møblert</li><li class='depositum'>Depositum: 18000,-</li><li>Inkludert: internett</li></ul>",
		picIndex:1,
		pris:6000,
		kvadrat:15,
		soverom:1,
		depositum:18000,
	},
	hybel2={
		inner: '<p class="hybelListHeader">Pen 3 roms på toppen av Sirkus. Oppvarming, varmtvann, internet og kabel-tv er inkludert i leien. Utsikt og solrikt på egen terrasse.</p><ul><li>Etasje: 3.</li><li class="leie">Månedsleie: 16 500,-</li><li class="kvadrat">Primærrom: 76 m²</li><li class="soverom">Soverom: 2</li><li>Delvis møblert</li><li class="depositum">Depositum: 18000,-</li><li>Inkludert: fyring, varmtvann</li></ul>',
		picIndex:2,
		pris:16500,
		kvadrat:76,
		soverom:2,
		depositum:18000,
	},
	hybel3={
		inner: '<p class="hybelListHeader">Leiligheten har meget høy standard, med møbler og inventar av høy kvalitet.</p><ul><li>Etasje: 3.</li><li class="leie">Månedsleie: 17 500,-</li><li class="kvadrat">Primærrom: 97 m²</li><li class="soverom">Soverom: 2</li><li>Møblert</li><li class="depositum">Depositum: 3x husleie</li></ul>',
		picIndex:3,
		pris:17500,
		kvadrat:97,
		soverom:2,
		depositum: 17500*3,
	},
	hybler=[hybel1,hybel2,hybel3],
	select=document.getElementById("sorter"),
	hybelContent=document.getElementsByClassName("hybel_content"),
	hybelPicture=document.getElementsByClassName("pic");

select.onchange=function(){
	switch (select.selectedIndex){
		case 0:
			hybler.sort(function(a,b){
				if(b.pris>a.pris) return -1;
				else if(b.pris<a.pris) return 1;
				return 0
			});
			break;
		case 1:
			hybler.sort(function(a,b){
				if(b.kvadrat>a.kvadrat) return -1;
				else if(b.kvadrat<a.kvadrat) return 1;
				return 0
			});
			hybler.reverse();
			break;
		case 2:
			hybler.sort(function(a,b){
				if(b.soverom>a.soverom) return -1;
				else if(b.soverom<a.soverom) return 1;
				return 0
			});
			hybler.reverse();
			break;
		case 3:
			hybler.sort(function(a,b){
				if(b.depositum>a.depositum) return -1;
				else if(b.depositum<a.depositum) return 1;
				return 0
			});
			break;
	}
	skrivUt();
}
function skrivUt(){
	for(var i=0;i<hybelContent.length;i++){
		hybelContent[i].innerHTML=hybler[i].inner;
		hybelPicture[i].src="content/hybel_pictures/hybel_"+hybler[i].picIndex+"_1.jpg";
	}
	//fikse index på bilder
	for(var i=0;i<hybelpictures.length;i++){
		bildegalleriClick(hybelpictures[i], hybler[i].picIndex);
	}
}