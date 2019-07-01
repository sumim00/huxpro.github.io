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

	$('#main h4').animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main h2').delay(100).animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main p').delay(200).animate({opacity : '1' , marginTop : '20px'},1000);


	var width1 = 820*$('.slides li').length + 'px';
	$('.slides').css('width' , width1);

	$('.slides li:last').prependTo('.slides');
	$('.slides').css('margin-left' , '-1252px');
	$('.slides li').css('opacity' , '0.5');
	$('.slides li:eq(2)').css('opacity' , '1');
	$('.button li').text('');

	$('.prev').click(function(){
		$('.slides li').stop().animate({'opacity' : '0.5'},300);
		$('.slides li:eq(1)').stop().animate({'opacity' : '1'},300);
		$('.slides')
			.stop().animate({marginLeft : parseInt($('.slides').css('margin-left')) + 820 + 'px'}, 'slow' , function(){
			$('.slides').css('margin-left' , '-1252px');
			$('.slides li:last').prependTo('.slides');
		});
		$('.button li').css('background-color','#cccccc');
		$('.button li:eq(' + $('.slides li:eq(3)').attr('data-num') + ')').css('background-color','#cc9966');
	});

	$('.next').click(function(){
		$('.slides li').stop().animate({'opacity' : '0.5'},300);
		$('.slides li:eq(3)').stop().animate({'opacity' : '1'},300);
		$('.slides')
			.stop().animate({marginLeft : parseInt($('.slides').css('margin-left')) - 820 + 'px'}, 'slow' , function(){
			$('.slides').css('margin-left' , '-1252px');
			$('.slides li:first').appendTo('.slides');
		});
		$('.button li').css('background-color','#cccccc');
		$('.button li:eq(' + $('.slides li:eq(3)').attr('data-num') + ')').css('background-color','#cc9966');
	});





 });
