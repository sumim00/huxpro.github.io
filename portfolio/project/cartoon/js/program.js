$(document).ready(function(){
	
	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if ( width1 >= 1200)
		{
			//캐릭터
			var swiper = new Swiper('.char_con', {
			  slidesPerView: 5,
			  spaceBetween: 20,
			  slidesPerGroup:1,
			
			  loop: true,
			 loopFillGroupWithBlank: true,
			  pagination: {
				el: '.swiper-pagination',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			 });
			

			//인기동영상
			$('.video_img').hover(function(){
				$('.video_btn img' , this).css('margin-top','-60px');
				$('em',this).stop().animate({opacity : '0.8'},'fast');
			},function(){
				$('.video_btn img' , this).css('margin-top','0px');
				$('em',this).stop().animate({opacity : '0.4'},'fast');
			});

			
		}
		else if ( width1 >= 768 && width1 <= 1199 )
		{
			//캐릭터
			var swiper = new Swiper('.char_con', {
			  slidesPerView:4,
			  spaceBetween:0,
			  slidesPerGroup:1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  pagination: {
				el: '.swiper-pagination',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },

			 });

			
			//인기동영상
			$('.video_img').hover(function(){
				$('.video_btn img' , this).css('margin-top','0px');
				$('em',this).stop().animate({opacity : '0.4'},'fast');
			},function(){
				$('.video_btn img' , this).css('margin-top','0px');
				$('em',this).stop().animate({opacity : '0.4'},'fast');
			});

		}
		else
		{

			//캐릭터
			var swiper = new Swiper('.char_con', {
			  slidesPerView:1,
			  spaceBetween:0,
			  slidesPerGroup:1,
			  loop: true,
			
			 loopFillGroupWithBlank: true,
			  pagination: {
				el: '.char_page',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.char_next',
				prevEl: '.char_prev',
			  },
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			 });


			//인기동영상
			$('.video_img').hover(function(){
				$('.video_btn img' , this).css('margin-top','0px');
				$('em',this).stop().animate({opacity : '0.4'},'fast');
			},function(){
				$('.video_btn img' , this).css('margin-top','0px');
				$('em',this).stop().animate({opacity : '0.4'},'fast');
			});
		
			
		}
	}).resize();
	
});