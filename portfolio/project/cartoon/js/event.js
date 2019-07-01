$(document).ready(function(){
	

	$(window).resize(function(){
		var width1 = parseInt($(this).width());
		if ( width1 >= 1200)
		{
			$('#event > div').hover(function(){
				$('.event_3',this).css('text-decoration' , 'underline');
			},function(){
				$('.event_3',this).css('text-decoration' , 'none');
			});
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
			$('.ban_1').click(function(){
				$('.ban_1').removeClass('ban_sel');
				$(this).addClass('ban_sel');
			});
		}
	}).resize();
	
});