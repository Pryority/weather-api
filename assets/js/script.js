var currentWeather = document.getElementById('current-weather');
var forecastRow = document.getElementById('forecast-row');
var forecastLength = 5;
const apiKey = "85b2f1bdec6377177c781dc904257b09";
var cityInput = document.getElementById('city-input');
var searchBtn = document.getElementById('search');
let cityName = "Toronto";


let apiURL;

const city = {
  'toronto': {
    'location': {
      'lat': "43.6532",
      'long': "79.3832",
    }
  },
  'montreal': {
    'location': {
      'lat': 40.7128,
      'long': 74.0060,
    }
  },
  'vancouver': {
    'location': {
      'lat': 40.7128,
      'long': 74.0060,
    }
  },
  'new york city': {
    'location': {
      'lat': 40.7128,
      'long': 74.0060,
    }
  },
  'tokyo': {
    'location': {
      'lat': 40.7128,
      'long': 74.0060,
    }
  },
}

var getWeather = (city) => {
  apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43.6532&lon=-79.382&units=metric&appid=85b2f1bdec6377177c781dc904257b09";

  // make a get request to url
  fetch(apiURL).then((response) => {
    // request was successful
    if (response.ok && city) {
      response.json().then((data) => {
        console.log('Request is OK')
        displayWeather(data)
      });
    }
    else {
      console.log(response);
      console.log("There was a problem with your request!");
    }
  });
};

var displayWeather = (list) => {
  // console.log(list);
  for (var i = 0; i < forecastLength; i++) {
    var temperature = list.list[i].main.temp;
    var wind = list.list[i].wind.speed;
    var humidity = list.list[i].main.humidity;
    var forecastDate = list.list[i].dt_txt;
    // var uv_index = list[i].main.humidity;

    // create forecast card wrapper div
    var forecastWrapperEL = document.createElement("div");
    forecastWrapperEL.setAttribute('id', "forecast-card-wrapper");
    forecastWrapperEL.classList = "p-1";
    forecastRow.appendChild(forecastWrapperEL);

    // create forecast card div
    var forecastCardEl = document.createElement("div");
    forecastWrapperEL.setAttribute('id', "forecast-card");
    forecastCardEl.classList = "col bg-warning p-3 rounded border";

    var forecastDateTextEl = document.createElement('p');
    forecastDateTextEl.setAttribute('id', 'forecast-date');
    forecastDateTextEl.classList = "fw-bold d-flex flex-wrap";
    forecastDateTextEl.textContent = forecastDate;
    var forecastDateSpanEl = document.createElement('span');
    forecastDateSpanEl.classList = "mx-2 d-flex flex-wrap";
    forecastDateTextEl.appendChild(forecastDateSpanEl);
    forecastCardEl.appendChild(forecastDateTextEl);

    // create temperature element to hold temp data
    var tempTextEl = document.createElement('p');
    tempTextEl.setAttribute('id', "temperature");
    tempTextEl.classList = "fw-bold d-flex flex-wrap";
    tempTextEl.textContent = "Temp:";
    var tempSpanEl = document.createElement('span');
    tempSpanEl.setAttribute('id', "temp-data");
    tempSpanEl.classList = "mx-2 d-flex flex-wrap";
    tempSpanEl.textContent = temperature + "ºC";
    tempTextEl.appendChild(tempSpanEl);
    forecastCardEl.appendChild(tempTextEl);

    // create wind element to hold wind data
    var windTextEl = document.createElement('p');
    windTextEl.setAttribute('id', "wind");
    windTextEl.classList = "fw-bold";
    windTextEl.textContent = "Wind:"
    var windSpanEl = document.createElement('span');
    windSpanEl.setAttribute('id', "wind-data");
    windSpanEl.classList = "mx-2 d-flex flex-wrap";
    windSpanEl.textContent = wind + " km/h";
    windTextEl.appendChild(windSpanEl);
    forecastCardEl.appendChild(windTextEl);

    // create humidity element to hold humidity data
    var humidityTextEl = document.createElement('p');
    humidityTextEl.setAttribute('id', "humidity");
    humidityTextEl.classList = "fw-bold";
    humidityTextEl.textContent = "Humidity:"
    var humiditySpanEl = document.createElement('span');
    humiditySpanEl.setAttribute('id', "humidity-data");
    humiditySpanEl.classList = "mx-2 d-flex flex-wrap";
    humiditySpanEl.textContent = humidity;
    humidityTextEl.appendChild(humiditySpanEl);
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
  }
};
var cityBtn = document.getElementById('#city', 'button');


var getCity = (cityName) => {
  if (!cityInput.value) {
    console.log('Need a city to search.')
  }
  else {
    cityName = cityInput.value;
    console.log('Fetching weather data for:', cityName);
    getWeather(cityName);
  }
};

searchBtn.addEventListener('click', getCity);

