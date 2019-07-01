$(document).ready(function(){

  //main_navi
  $('#container article:not('+ $('.selected1').attr('href') +')').hide();
  $('.slide_date').click(function(){
    $('.slide_date').removeClass('selected1');
    $(this).addClass('selected1');
    $('#container article').hide();
    $($(this).attr('href')).show();
    return false;
  });

});
