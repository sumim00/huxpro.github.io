$(document).ready(function(){
	
	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if ( width1 >= 1200)
		{
			$('.ban_1').click(function(){
				$('.ban_1').removeClass('ban_sel');
				$(this).addClass('ban_sel');
			});
		}
		else if ( width1 >= 768 && width1 <= 1199 )
		{
			$('.ban_1').click(function(){
				$('.ban_1').removeClass('ban_sel');
				$(this).addClass('ban_sel');
			});
		}
		else
		{
			var swiper = new Swiper('.banner_ul2', {
			  slidesPerView: 5,
			  spaceBetween: 30,
			});
			$('.ban_1').click(function(){
				$('.ban_1').removeClass('ban_sel');
				$(this).addClass('ban_sel');
			});
		}
	}).resize();
	
});