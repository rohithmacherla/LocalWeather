var symbols = document.getElementById("symbol_text");
var temp = document.getElementById('info_text');
var title = document.getElementById('title_text');
var current_temperature;
var typeOfTemp = 0;
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
    var key = "&APPID=a70a4a65e65ff25fc18d01f7e86a679b";
    var pre = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude;
    var api = pre + key;
    console.log(api);
    var code_icon;
    $.getJSON(api, function(data) {
        code_icon = data.weather[0].icon;
        var pic_api = "http://openweathermap.org/img/w/" + code_icon + ".png";
        $(".icon").attr("src", pic_api);
        console.log(code_icon);
        symbols.innerHTML = "";
        location.innerHTML = "Location://"+ data.name;
        current_temperature = c2f(data.main.temp-273).toFixed(2);
        temp.innerHTML = "Temperature://" + current_temperature + "°F";
    })
}
function toggleTemp() {
    if(typeOfTemp === 0) {
        current_temperature = f2c(current_temperature);
        temp.innerHTML = "Temperature://" + current_temperature.toFixed(2) + "°C";
        typeOfTemp = 1;
    } else if(typeOfTemp ===1) {
        current_temperature = c2f(current_temperature);
        temp.innerHTML = "Temperature://" + current_temperature.toFixed(2) + "°F";
        typeOfTemp = 0;
    }
}
function c2f (temp) {
    return 9/5*(temp) + 32;
}
function f2c (temp) {
    return (temp-32)*5/9;
}


