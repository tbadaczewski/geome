document.addEventListener("deviceready", function() {
	//navigator.geolocation.getCurrentPosition(function(data){
		var location = document.getElementById("location");
		location.innerHTML = "Hello World";//"Latitude: " + data.coords.latitude + " - Longitude: " + data.coords.longitude; 
	//});
}, false);