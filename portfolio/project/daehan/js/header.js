$(document).ready(function(){
		$('.slide_bg').hide();

		//상단 고정
		$(window).scroll(function(){ //화면 스크롤할 때
			if ($(this).scrollTop() > 1) //상단에서 넘어갈 때,
			{
				$('#top').css({'position':'fixed','width':'96%','z-index':'9990'});
			}
			else
			{
				$('#top').css({'position':'','width':'96%','z-index':''});
			}
		});

		//햄버거 버튼
			$('.left_img').click(function(){
					$('.slide_menu').animate({ left : '0%'},500);
					$('.slide_bg').show();
					$('body').css({overflow:'hidden'}).css('display','fixed');
			});
			$('.slide_bg').click(function(){
					$('.slide_menu').animate({ left : '-60%'},500);
					$(this).hide();
					$('body').css({overflow:''}).css('display','');
			});

});
