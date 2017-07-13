var symbols = document.getElementById("symbol_text");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        symbols.innerHTML = "Please Enable Geolocation.";
    }
}

function showPosition(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    var location = document.getElementById('location_text');
    symbols.innerHTML = latitude + " " + longitude;

    var a = "https://api.darksky.net/forecast/";
    var key = "27a292e54331c80481c3492dee181817/";
    // var api = a + key + latitude + "," + longitude;
    var api = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a70a4a65e65ff25fc18d01f7e86a679b";
    console.log(api);


    $.getJSON(api, function(data) {
        location.innerHTML = data.cod;
    })

}


