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

	//태그추가
	$('#main_nav').before('<div class="bg"></div>');

	//bg, sub
	$('.bg').hide();
	$('.sub').hide();

	$('#nav_ul').hover(function(){
		$('.bg:not(:animated)').slideDown(400);
		$('.sub:not(:animated)').slideDown(400);
	},function(){
		$('.bg:not(:animated)').slideUp(400);
		$('.sub:not(:animated)').slideUp(400);
	});


	$('#nav_ul > li > a').mouseover(function(){
		$(this).next().stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$(this).css('color' , '#cc9966');
	}).mouseout(function(){
		$(this).next().stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$(this).css('color' , '#333333');
	});

	$('.selected1').css('color' , '#cc9966');
	$('.selected1').next().stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');


	$('ul.sub1').mouseover(function(){
		$('.line1').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu1').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line1').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu1').css('color' , '#333333');
	});

	$('ul.sub2').mouseover(function(){
		$('.line2').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu2').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line2').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu2').css('color' , '#333333');
	});

	$('ul.sub3').mouseover(function(){
		$('.line3').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu3').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line3').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu3').css('color' , '#333333');
	});

	$('ul.sub4').mouseover(function(){
		$('.line4').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu4').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line4').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu4').css('color' , '#333333');
	});

	$('ul.sub5').mouseover(function(){
		$('.line5').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu5').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line5').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu5').css('color' , '#333333');
	});

	$('ul.sub6').mouseover(function(){
		$('.line6').stop().animate({width : '100%' , left : '0px' , height : '3px'},'fast');
		$('.menu6').css('color' , '#cc9966');
	}).mouseout(function(){
		$('.line6').stop().animate({width : '0px' , left : '50%' , height : '0px'},'fast');
		$('.menu6').css('color' , '#333333');
	});


	$('.lang_li > ul').hide();
	$('.lang_li').toggle(function(){
		$('.lang_li').children('ul').show();
		$('.lang_li').css('background','url(images/top/arrow_open.png) no-repeat right center');
	},function(){
		$('.lang_li').children('ul').hide();
		$('.lang_li').css('background','url(images/top/arrow.png) no-repeat right center');
	});


	//상단 고정
	$('.logo').hide();
	$(window).scroll(function(){ //화면 스크롤할 때
		if ($(this).scrollTop() > 165) //상단에서 40이 넘어갈 때,
		{
			$('#top2').addClass('mfix');
			$('#menu_fix').addClass('mfix2');
			$('.bg').css({'position':'fixed','top':'66px'});
			$('.sns').hide();
			$('.logo').show().css({'position' : 'absolute' , 'top' : '13px' , 'left' : '155px'});
		}
		else
		{
			$('#top2').removeClass('mfix');
			$('#menu_fix').removeClass('mfix2');
			$('.bg').css({'position':'absolute','top':'167px'});
			$('.sns').show();
			$('.logo').hide();
		}
	});
});
