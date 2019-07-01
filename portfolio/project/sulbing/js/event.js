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

	$('#evt_nav ul li a').click(function(){
		$('#evt_nav ul li a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
	
	$('#event figure').hover(function() {
		$(this).animate({background : 'rgba(0,0,0,0.7)'}, 300);
		},function() {
		$(this).animate({background : 'transparent'}, 300);
	});

	$('#main h4').animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main h2').delay(100).animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main p').delay(200).animate({opacity : '1' , marginTop : '20px'},1000);
});