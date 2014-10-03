document.addEventListener("load", function() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(position) {
		alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
	}

	function error(err) {
    	alert('ERROR(' + err.code + '): ' + err.message);    	
    }

	navigator.geolocation.getCurrentPosition(success, error, options);
}, false);