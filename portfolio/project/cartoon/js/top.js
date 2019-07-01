$(document).ready(function(){
		$('#top').before('<div class="bg"></div>');
		$('.bg').hide();

		

		//상단 고정
		$(window).scroll(function(){ //화면 스크롤할 때
			if ($(this).scrollTop() > 1) //상단에서 넘어갈 때,
			{
				$('#top').css({'position':'fixed','width':'100%','z-index':'9997'});
			}
			else
			{
				$('#top').css({'position':'','width':'100%','z-index':''});
			}
		});

		//햄버거 버튼
			$('.all_menu').toggle(function(){
					$('.menu-trigger').addClass('active').css('z-index' , '9999');
					$(this).animate({left : '53%'},500);
					$('.menu_wrap').animate({ left : '0%'},500);
					$('.bg').show();
				},function(){
					$('.menu-trigger').removeClass('active').css('z-index' , '50');
					$(this).animate({left : '0%'},500);
					$('.menu_wrap').animate({ left : '-80%'},500);
					$('.bg').hide();
			});

});