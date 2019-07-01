$(document).ready(function(){
	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if(width1 > 1300){
			$('body').css('width','100%')
		}
		else if(width1 <= 1300){
			$('body').css('width','1300px')
		}
		else
		{
			$('body').css('width','100%')
		}
	}).resize();

	$('.back1').animate({opacity : '1'},1000);
	$('.back2').delay(800).animate({opacity : '1'},1000);
	$('#main, .intro_main_img').delay(1300).animate({opacity : '1' , marginTop : '20px'},1000);
});
