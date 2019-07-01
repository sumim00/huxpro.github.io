$(document).ready(function(){
	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if ( width1 >= 1200)
		{
			//상단 동영상
			var swiper = new Swiper('.banner_vid', {
			  slidesPerView: 3,
			  spaceBetween: 20,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			  pagination: {
				el: '.banner_page',
				clickable: true,
			  },
			 });

			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView: 7,
			  spaceBetween: 30,
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			});

			//상단 영상 호버
			$('.ban_v1').mouseover(function(){
				$(this).stop().animate({'margin-top' : '0px'},'fast');
			}).mouseout(function(){
				$(this).stop().animate({'margin-top' : '40px'},'fast');
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
			//상단 동영상
			var swiper = new Swiper('.banner_vid', {
			  slidesPerView: 2,
			  spaceBetween: 20,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			  pagination: {
				el: '.banner_page',
				clickable: true,
			  },
			 });

			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView: 5,
			  spaceBetween: 30,
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			
			});
		}
		else
		{
			$('.banner_wrap > div').css('height' , '500px');
			//상단 동영상

			//상단 동영상
			var swiper = new Swiper('.banner_vid', {
			  slidesPerView: 1,
			  spaceBetween: 0,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			  pagination: {
				el: '.banner_page',
				clickable: true,
			  },
			 });

			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView: 4,
			  spaceBetween: 30,
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			});
		}
	}).resize();
	
});