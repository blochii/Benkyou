var map;
var data;


//マップ表示
function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.658517, lng: 139.745493},
    scrollwheel: false,
    zoom: 6
  });
}

//XML読み込み
$(function(){
    $.ajax({
        url:'data.xml',
        type:'GET',
        dataType:'xml',
        timeout:1000,
        error:function() {
            alert("ロード失敗");
        },
        success:function(xml){
        	data = $(xml).find("city");
            initGeo();
        }
    });
});

//地名から座標取得
function initGeo(){
	var geocoder = new google.maps.Geocoder();

	data.each( function(){
		var city = data.find("name").text();
  		console.log(city);
  		geocoder.geocode(
  		{address: city }, 
  		function(results, status) {
  			if (status == google.maps.GeocoderStatus.OK){
  				var marker = new google.maps.Marker({
    				position: results[0].geometry.location,
    				map: map,
    				title:"Hello World!"
				});
  			}else{
    			onsole.log("住所から緯度経度に変換できません");
  			}	
  		})
	})
}

