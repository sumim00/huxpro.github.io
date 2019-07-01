$(document).ready(function(){


    $('.seat').not('.no-select').toggle(function(){
      var seat = "";
      var total = "";
      $(this).addClass('selected');
      $('.screen_area a.selected').each(function(index, item){
        seat = $(this).attr('data-seat') + '번 ';
        total = total + seat;
        $('#locationText').text(total);
      });
      var num = $('.selected').length -1;
      $('#total_num').text(num + '명');
      var price = num * 8000;
      $('#total_price').text(price + '원');

    },function(){
      var seat = "";
      var total = "";
      $('#locationText').empty();
      $(this).removeClass('selected');
      $('.screen_area a.selected').each(function(index, item){
        seat = $(this).attr('data-seat') + '번 ';
        total = total + seat;
        $('#locationText').text(total);
      });
      var num = $('.selected').length -1;
      $('#total_num').text(num + '명');
      var price = num * 8000;
      $('#total_price').text(price + '원');
    });


    $('.screen_area a.no-select').click(function(){
      alert('이미 선택된 좌석입니다.');
      return false;
    });





});
