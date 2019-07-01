$(document).ready(function(){

  //main_navi
  $('#magazine_navi article:not('+ $('.selected').attr('href') +')').hide();
  $('.cate_txt').click(function(){
    $('.cate_txt').removeClass('selected');
    $(this).addClass('selected');
    $('#magazine_navi article').hide();
    $($(this).attr('href')).show();
    return false;
  });

});
