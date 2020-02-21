const weather = document.querySelector('.js-weather'),
    temperature = weather.querySelector('.temperature'),
    city = weather.querySelector('.city');

const API_KEY = "";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();     // then은 데이터가 넘어왔을 때 함수를 실행.
    }).then(function(json) {
        console.log(json);
        const parsedTemperature = json.main.temp;
        const place = json.name;
        temperature.innerText = `${parsedTemperature}℃`;
        city.innerText = `${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   //latitude: latitude,
        longitude    //longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();

}

init();
