document.addEventListener("deviceready", function() {
    navigator.geolocation.getCurrentPosition(function(position) {
    	alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
    });
}, false);