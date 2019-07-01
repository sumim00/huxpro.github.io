$(document).ready(function(){
	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if ( width1 >= 1200)
		{
			////////notice
			$('#layer').text('');
			$('.close_notice').hover(function(){
				$(this).stop().animate({'background-color' : '#ffffff' , 'color' : '#cc9966'},'fast');
			},function(){
				$(this).stop().animate({'background-color' : '#cc9966' , 'color' : '#ffffff'},'fast');
			});

			$('.close_notice, #layer').click(function(){
				$('#notice').hide();
				$('#layer').hide();
			});

			//메인
			$('.slider').bxSlider();

			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView:6,
			  spaceBetween: 0,
			  slidesPerGroup: 3,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  pagination: {
				el: '.pro_page',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.pro_next',
				prevEl: '.pro_prev',
			  },
				autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			 });

			//프로그램
			var swiper = new Swiper('.best_con', {
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 5000,
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
			////////notice
			$('#layer').text('');
			$('.close_notice').hover(function(){
				$(this).stop().animate({'background-color' : '#ffffff' , 'color' : '#cc9966'},'fast');
			},function(){
				$(this).stop().animate({'background-color' : '#cc9966' , 'color' : '#ffffff'},'fast');
			});

			$('.close_notice, #layer').click(function(){
				$('#notice').hide();
				$('#layer').hide();
			});

			//메인
			$('.slider').bxSlider();


			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView:5,
			  spaceBetween: 20,
			  slidesPerGroup: 3,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  pagination: {
				el: '.pro_page',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.pro_next',
				prevEl: '.pro_prev',
			  },
				autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			 });

			//프로그램
			var swiper = new Swiper('.best_con', {
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 50000,
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
			////////notice
			$('#layer').text('');
			$('.close_notice').hover(function(){
				$(this).stop().animate({'background-color' : '#ffffff' , 'color' : '#cc9966'},'fast');
			},function(){
				$(this).stop().animate({'background-color' : '#cc9966' , 'color' : '#ffffff'},'fast');
			});

			$('.close_notice, #layer').click(function(){
				$('#notice').hide();
				$('#layer').hide();
			});

			//메인
			$('.slider').bxSlider();

			//캐릭터
			var swiper = new Swiper('.pro_container', {
			  slidesPerView:3,
			  spaceBetween: 10,
			  slidesPerGroup:3,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  pagination: {
				el: '.pro_page',
				clickable: true,
			  },
			  navigation: {
				nextEl: '.pro_next',
				prevEl: '.pro_prev',
			  },
				autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			  },
			 });

			//프로그램
			var swiper = new Swiper('.best_con', {
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			  loop: true,
			  loopFillGroupWithBlank: true,
			  autoplay: {
			  delay: 5000,
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
