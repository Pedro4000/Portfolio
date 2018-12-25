var restaurantlinks=['1','2','3'];
var API_Filmlinks=['1','2','3'];
var MindGeek=['1','2','3'];
var Cupoftealinks=['1','2','3'];
var i=1;

$("#nextimg1").on('click',nownextimg1);
$("#previmg1").on('click',nowprevimg1);

$(".nextimg2").on('click',nownextimg2);
$(".previmg2").on('click',nowprevimg2);

$(".nextimg3").on('click',nownextimg3);
$(".previmg3").on('click',nowprevimg3);

$(".nextimg4").on('click',nownextimg4);
$(".previmg4").on('click',nowprevimg4);

function nownextimg1 (){
	i++;
	if (i===restaurantlinks.length) {
		i=0;
	}
	$(".projectimage1").attr('src',"img/projets/restaurant"+restaurantlinks[i]+".PNG");
    $(".projectimage1").css("transition", "300ms");
}

function nowprevimg1 (){
	i--;
	if (i==-1) {
		i=restaurantlinks.length-1;
	}
	$(".projectimage1").attr('src',"img/projets/restaurant"+restaurantlinks[i]+".PNG");
}


function nownextimg2 (){
	console.log('yoy');
	i++;
	if (i===API_Filmlinks.length) {
		i=0;
	}
	$(".projectimage2").attr('src',"img/projets/API_Film"+API_Filmlinks[i]+".PNG");
}

function nowprevimg2 (){
	i--;
	if (i==-1) {
		i=API_Filmlinks.length-1;
	}
	$(".projectimage2").attr('src',"img/projets/API_Film"+API_Filmlinks[i]+".PNG");
}


function nownextimg3 (){
	i++;
	if (i===MindGeek.length) {
		i=0;
	}
	$(".projectimage3").attr('src',"img/projets/MindGeek"+MindGeek[i]+".PNG");
}

function nowprevimg3 (){
	i--;
	if (i==-1) {
		i=MindGeek.length-1;
	}
	$(".projectimage3").attr('src',"img/projets/MindGeek"+MindGeek[i]+".PNG");
}


function nownextimg4 (){
	i++;
	if (i===Cupoftealinks.length) {
		i=0;
	}
	$(".projectimage4").attr('src',"img/projets/Cupoftea"+Cupoftealinks[i]+".PNG");
}

function nowprevimg4 (){
	i--;
	if (i==-1) {
		i=Cupoftealinks.length-1;
	}
	$(".projectimage4").attr('src',"img/projets/Cupoftea"+Cupoftealinks[i]+".PNG");
}