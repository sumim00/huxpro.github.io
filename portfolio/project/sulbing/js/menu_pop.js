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

	//상단
	$('#main h4').animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main h2').delay(100).animate({opacity : '1' , marginTop : '20px'},1000);
	$('#main p').delay(200).animate({opacity : '1' , marginTop : '20px'},1000);


	//bar click 이벤트
	$('#bar li a').click(function(){
		$('#bar li a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});

	//상세정보 view
	$('.view').hide();
	$('#content ul li a').toggle(function(){
		$('.view').hide();
		$($(this).attr('href')).show(500);
		return false;
	}, function(){
		$($(this).attr('href')).hide(500);
		return false;
	});

	$('#img_r .close').click(function(){
		$('.view').hide(500);
		return false;
	});

	//이미지 hover
	$('#content ul li').toggle(function(){
		$(this).addClass('click1');
	},function(){
		$(this).removeClass('click1');
	});

	$('#content ul li').hover(function(){
		$(this).stop().animate({borderColor : '#cc9966'},300);
		//$('p',this).animate({color : '#cc9966'},300);
	},function(){
		$(this).stop().animate({borderColor : '#ffffff'},300);
	});



	//좋아요 버튼
	$('#like_btn img').toggle(function(){
		$(this).attr('src','images/menu_pop/heart2.png');
	},function(){
		$(this).attr('src','images/menu_pop/heart1.png');
	});

	//더보기 버튼
	$('#more').hover(function(){
		$(this).addClass('hover1');s
	},function(){
		$(this).removeClass('hover1');
	});
});
