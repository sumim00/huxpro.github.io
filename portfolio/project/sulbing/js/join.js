
//checkbox
(function($) {
	$.fn.customizeCRInput = function(options) {
		var options = $.extend({
			checked_class : "checked"
		}, options);

		return this.each(function(){
			var input = $(this);
			input.on("change",function(){
				var is_checked = input.is(":checked");
				var type = input.attr("type");
				var id = input.attr("id");
				var label = $("label[for="+id+"]");
				if (type == "checkbox") {
					if (input.is(":checked")) {
						label.addClass(options.checked_class);
					} else {
						label.removeClass(options.checked_class);
					}
				} else if (type == "radio") {
					$("input[name="+input.attr("name")+"]").each(function(idx){
						$("label[for="+$(this).attr("id")+"]").removeClass(options.checked_class);
					});
					label.addClass(options.checked_class);
				}
			});
		});
	};
})(jQuery);



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


	$('#login_top h3').animate({opacity : '1' , marginTop : '20px'},1000);
	$('#login_top p').delay(100).animate({opacity : '1' , marginTop : '20px'},1000);

	$('#check1, #check2, #all_okay, #okay1, #okay2, #okay3, #u_sex1, #u_sex2').hide();
	$('#all_okay').toggle(function(){
		$('.type_chkbox1').addClass('checked');
	},function(){
		$('.type_chkbox1').removeClass('checked');
	});


	if ($('.type_chkbox1').attr('class') == 'checked')
	{
		$(this).attr('color' , '#cc9966');
	}else
	{
		$(this).attr('color' , '#999999');
	};
});
