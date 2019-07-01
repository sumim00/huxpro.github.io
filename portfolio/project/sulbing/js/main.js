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

	////////best menu

	var width1 = 330*$('.best_ul li').size() + 'px';
	$('.best_ul').css('width' , width1);
	$('.best_ul').css('margin-left' , '-330px');

	$('.prev').click(function(){
		$('.prev, .next').hide();
		$('.best_ul')
			.animate({marginLeft : parseInt($('.best_ul').css('margin-left')) + 330 + 'px'}, 'slow' , 'swing' , function(){
			$('.best_ul').css('margin-left' , '-330px');
			$('.best_ul li:last').prependTo('.best_ul');
			$('.prev , .next').show();
			});
	});

	$('.next').click(function(){
		$('.prev, .next').hide();
		$('.best_ul')
			.animate({marginLeft : parseInt($('.best_ul').css('margin-left')) - 330 + 'px'}, 'slow' , 'swing' , function(){
			$('.best_ul').css('margin-left' , '-330px');
			$('.best_ul li:first').appendTo('.best_ul');
			$('.prev , .next').show();
			});
	});

	//////menu
	$('.m_menu_btn a').css('width','40px').css('background-position','5px').text('');
	$('.m_menu_btn a').mouseover(function(){
		$(this).animate({'width' : '120px' , 'background-position' : '80px'},'fast').text('자세히 보기');
	}).mouseout(function(){
		$(this).animate({'width' : '40px' , 'background-position' : '5px'},'fast').text('');
	});

	//////style
	$('#style figure').hover(function(){
		$(this).animate({marginTop : '70px' , 'box-shadow' : '1px 1px 3px #cccccc'},'fast');
	},function(){
		$(this).animate({marginTop : '90px'},'fast');
		return false;
	});


	//////event
	$('#store > p, #store > h3').hide();
	$('#store').hover(function(){
		$(this).stop().animate({backgroundColor : 'rgba(0,0,0,0.8)'},'fast');
		$('#store > p, #store > h3').stop().fadeIn('fast');
	},function(){
		$(this).stop().animate({backgroundColor : 'transparent'},'fast');
		$('#store > p, #store > h3').stop().fadeOut('fast');
	});
	$('#franchise > p, #franchise > h3').hide();
	$('#franchise').hover(function(){
		$(this).stop().animate({backgroundColor : 'rgba(0,0,0,0.8)'},'fast');
		$('#franchise > p, #franchise > h3').stop().fadeIn('fast');
	},function(){
		$(this).stop().animate({backgroundColor : 'transparent'},'fast');
		$('#franchise > p, #franchise > h3').stop().fadeOut('fast');
	});

	////sns
	/*$('.sns_img li').mouseover(function(){
		$('a img' , this).stop().animate({width : '250px' , height : '250px' , marginLeft : '-10px' , marginTop : '-10px'},300);
	}).mouseout(function(){
		$('a img' , this).stop().animate({width : '230px' , height : '230px' , marginLeft : '' , marginTop : ''},300);
	});*/
 });
