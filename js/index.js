document.addEventListener("deviceready", function() {
	//var location = document.getElementById("location");
	alert("Loaded");
	//getLocation();
}, false);

/*
function getLocation() {
	var location = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var location = document.getElementById("location");

    location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
}
*/