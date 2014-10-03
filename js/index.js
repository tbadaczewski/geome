document.addEventListener("deviceready", function() {
	    navigator.geolocation.getCurrentPosition(
	    	function(position) {
	    		alert("Success");
	    		//alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
	    	},
	    	function(error){
				alert("Error"); 
	    	});
}, false);