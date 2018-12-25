$(".cta").on("click",empty);


$("a[href^='#']").click(function (e) {
		var 
			yPos,
			yInitPos,
			target = ($($(this).attr("href") + ":first"));
		e.preventDefault(); 
		
		yInitPos = $(window).scrollTop();
		window.location.hash = $(this).attr("href");
		
		$(window).scrollTop(yInitPos);
		
		target = ($($(this).attr("href") + ":first"));
 
		if (target.length == 0) {
			target = ($("a[name=" + $(this).attr("href").replace(/#/gi,"") + "]:first"))
		}
		
		if (target.length == 1) {
			yPos = target.offset().top;

			$('html,body').animate({ scrollTop: yPos - 50 }, 1000); 
		}
	});


$(window).scroll(function(){
    if( $(window).scrollTop() > 200){
      	$(".main-nav-list").css("background-color", "rgba(0,0,0,0.9)");
		$(".main-nav-list").toggleClass("hello");
    }
    else{
    	$(".main-nav-list").css("background-color", "rgba(0,0,0,0.3)");
    	$(".main-nav-list").css("transition", "300ms");
    }
  });



function empty(e) {
    var x;
    var y;
    var z;
    x = $(".input-name").val();
    y = $(".input-mail").val();
    z = $(".input-message").val();
            console.log(z);
    if (x == "" || y== "" || z=="") {
        alert("Vous n'avez pas renseigné tout les champs");
        return false;
        console.log('yoyo');
    };
}


/*css("background-color", "yellow");*/


/* function circle1()
{
  var canvas = document.getElementById("canvasred");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.lineCap="round";
  context.lineWidth="15";
  context.arc(100, 100, 90, 2.8, 6.58);
  context.strokeStyle="#c0392b";
  context.stroke();
 
 
}
circle1();

function circle2()
{
  var canvas = document.getElementById("canvaswhite");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.lineCap="round";
  context.lineWidth="8";
  context.arc(100, 100, 90, 2.8, 5);
  context.strokeStyle="#ecf0f1";
  context.stroke();
 
 
}
circle2();*/
/*
$(window).scroll(function(){
    if( $(window).scrollTop() > 100){
      console.log($(window).scrollTop());
    }
  });*/