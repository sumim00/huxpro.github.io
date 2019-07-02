/*
 * ���� ������ ICO �������� ��ũ��Ʈ - PC
 */

$(document).ready(function(){
	$("ul.lnb li").eq(2).addClass("active");
	
	// ��� �� Ŭ�� �� �̺�Ʈ �߻�
	$("ul.tab_list a.btn_tab").on("click", function(){
		var idx = $(this).data("tab_idx");
		
		$("ul.tab_list li").removeClass("active");
		$(this).parent().addClass("active");
		
		$("div.contents div.tab_items").hide();
		$("div.contents div.tab_items").eq(idx).show();
	});
	
	// ��Ʃ�� ��ũ ����
	var movie_str = $("div.video iframe").attr("src");
	
	var movie_key = movie_str.match('[?&]v=([^&]+)');
	
	console.log(movie_key);
	
	if(movie_key){
		var movie_attr = "https://www.youtube.com/embed/" + movie_key[1];
	
		$("div.video iframe").attr("src", movie_attr);
	}
});