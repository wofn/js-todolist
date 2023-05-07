const API_KEY = "29025953bd125d0e02783e2e92d47dd7";
//사이트 -profile - api key

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) //url을 부르기
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `/ ${data.weather[0].main}`;
    });
}

function onGeoError() {
  console.log("can't find you, No weather for you.");
}
!navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//이걸하면 브라우저에서 위치 좌표를 알 수 있다.
