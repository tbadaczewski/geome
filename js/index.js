var location = document.getElementById("location");

document.addEventListener("deviceready", function() {
	getLocation();
	location.innerHTML = "Geolocation is not supported by this browser.";
}, false);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
}