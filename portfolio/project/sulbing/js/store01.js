



$(document).ready(function () {
var mapLatLng = new google.maps.LatLng(37.552414, 126.923002)

var mapOptions = { 
	zoom: 18, 
	center: mapLatLng,
	mapTypeId: google.maps.MapTypeId.ROADMAP 
}


var mapGoogle = new google.maps.Map(document.getElementById('map_wrap'), mapOptions);
var mapMarker = new google.maps.Marker({
	map: mapGoogle,
	position: mapLatLng,
	animation: google.maps.Animation.DROP,
	title: "설빙 홍대놀이터점",
	icon: "images/map/pin.png",
	info: "말풍선"
});

/*var content = "매장명 : 설빙 홍대놀이터점 <br> 연락처 : 02-323-3288 <br> 주소 : 서울특별시 마포구 서교동 와우산로21길 20";
	
var infowindow = new google.maps.InfoWindow({ content: content});
	google.maps.event.addListener(mapMarker, 'click', function () {
	mapGoogle.setCenter(mapMarker.getPosition());
	infowindow.open(mapGoogle,mapMarker);
});*/

//좌표
var location1_1 = new google.maps.LatLng(37.552414, 126.923002);
var location1_2 = new google.maps.LatLng(37.557384, 126.936672);
var location1_3 = new google.maps.LatLng(37.557957, 126.946018);
var location1_4 = new google.maps.LatLng(37.485840, 126.929306);
var location1_5 = new google.maps.LatLng(37.518226, 126.905993);


$(".con1_1").click(function(){
	$('.con li h3').css('color','#333333');
	$('h3' , this).css('color','#996633');
    mapGoogle.panTo(location1_1);      
	mapMarker.setPosition(location1_1);
});
$(".con1_2").click(function(){
	$('.con li h3').css('color','#333333');
	$('h3' , this).css('color','#996633');
    mapGoogle.panTo(location1_2);      
	mapMarker.setPosition(location1_2);
});
$(".con1_3").click(function(){
	$('.con li h3').css('color','#333333');
	$('h3' , this).css('color','#996633');
    mapGoogle.panTo(location1_3);      
	mapMarker.setPosition(location1_3);
});
$(".con1_4").click(function(){
	$('.con li h3').css('color','#333333');
	$('h3' , this).css('color','#996633');
    mapGoogle.panTo(location1_4);      
	mapMarker.setPosition(location1_4);
});
$(".con1_5").click(function(){
	$('.con li h3').css('color','#333333');
	$('h3' , this).css('color','#996633');
    mapGoogle.panTo(location1_5);      
	mapMarker.setPosition(location1_5);
});



});