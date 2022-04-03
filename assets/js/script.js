var currentWeather = document.getElementById('current-weather');
var forecastRow = document.getElementById('forecast-row');
var forecastLength = 5;
const apiKey = "85b2f1bdec6377177c781dc904257b09";
let apiURL;
const cities = {
  'toronto': {
    'location': {
      'lat': "43.6532",
      'long': "79.3832",
    }
  },
  'new york city': {
    'location': {
      'lat': 40.7128,
      'long': 74.0060,
    }
  },
}

var getWeather = (city) => {
  apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43.6532&lon=-79.382&appid=85b2f1bdec6377177c781dc904257b09";

  // make a get request to url
  fetch(apiURL).then((response) => {
    // request was successful
    if (response.ok && city) {
      response.json().then((data) => {
        console.log('Request is OK')
        console.log(data)
        displayWeather(data)
      });
    }
    else {
      console.log(response);
      console.log("There was a problem with your request!");
    }
  });
};

var getLocation = function (data) {
}

var displayWeather = (list) => {
  for (var i = 0; i < forecastLength; i++) {
    var temperature = list[i].main.temp;
    // var wind = list[i].wind.speed;
    // var humidity = list[i].main.humidity;
    // var uv_index = list[i].main.humidity;

    // create forecast card wrapper div
    var forecastWrapperEL = document.createElement("div");
    forecastWrapperEL.setAttribute('id', "forecast-card-wrapper");
    forecastWrapperEL.classList = "p-1";
    forecastRow.appendChild(forecastWrapperEL);

    // create forecast card div
    var forecastCardEl = document.createElement("div");
    forecastWrapperEL.setAttribute('id', "forecast-card");
    forecastCardEl.classList = "col bg-warning py-1 px-3";

    // create temperature element to hold temp data
    var tempTextEl = document.createElement('p');
    tempTextEl.setAttribute('id', "temperature");
    tempTextEl.classList = "fw-bold";
    var tempSpanEl = document.createElement('span');
    tempSpanEl.setAttribute('id', "temp-data");
    tempSpanEl.classList = "mx-2";
    tempSpanEl.textContent = temperature;
    tempTextEl.innerHTML = tempSpanEl;
    forecastCardEl.appendChild(tempTextEl);

    // create wind element to hold wind data
    var windTextEl = document.createElement('p');
    forecastWrapperEL.setAttribute('id', "wind");
    windTextEl.classList = "fw-bold";
    var windSpanEl = document.createElement('span');
    windSpanEl.setAttribute('id', "wind-data");
    windSpanEl.classList = "mx-2";
    windSpanEl.textContent = wind;
    windTextEl.innerHTML = windSpanEl;
    forecastCardEl.appendChild(windTextEl);

    // create humidity element to hold humidity data
    var humidityTextEl = document.createElement('p');
    forecastWrapperEL.setAttribute('id', "humidity");
    humidityTextEl.classList = "fw-bold";
    var humiditySpanEl = document.createElement('span');
    humiditySpanEl.setAttribute('id', "humidity-data");
    humiditySpanEl.classList = "mx-2";
    humiditySpanEl.textContent = humidity;
    humidityTextEl.innerHTML = humiditySpanEl;
    forecastCardEl.appendChild(humidityTextEl);

    // create uv index element to hold uv index data
    // var uvTextEl = document.createElement('p');
    // forecastWrapperEL.setAttribute('id', "uv-index");
    // uvTextEl.classList = "fw-bold";
    // var uvTextEl = document.createElement('span');
    // uvTextEl.setAttribute('id', "uv-data");
    // uvTextEl.classList = "badge alert-success text-light mx-2";
    // uvTextEl.textContent =
    //   uvTextEl.innerHTML = uvTextEl;
    // forecastCardEl.appendChild(uvTextEl);

    // append inner html elements to forecast wrapper
    forecastWrapperEL.appendChild(forecastCardEl);
    // forecastRow.appendChild(forecastWrapperEL);
  }
};

getWeather(cities.toronto);