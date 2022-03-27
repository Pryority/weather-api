var currentWeather = document.getElementById('current-weather');
var forecastLength = 5;
const apiKey = "85b2f1bdec6377177c781dc904257b09";
const startingLat = 43.6532;
const startingLong = 79.3832;



var getWeather = function(weather) {
    // format the github api url
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + startingLat + "&lon=" + startingLong + "&appid=" + apiKey;
  
    // make a get request to url
    fetch(apiURL).then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
            console.log(data)
            displayWeather(data);
  
            // // check if api has paginated issues
            // if (response.headers.get("Link")) {
            // displayWarning(repo);
            // }
        });
      }
      else {
        console.log(response);
        alert("There was a problem with your request!");
      }
    });
  };

  var getLocation = function(data) {
      
  }

  var displayWeather = function(issues) { 
    // loop over a 5-day period of time (i.e. 5 times - forecastLength = 5)
    for (var i = 0; i < forecastLength; i++) {
        // create div to to serve as forecast card
        var forecastWrapperEL = document.createElement("div");
        forecastWrapperEL.classList = "p-1";
        var forecastCardEl = document.createElement("div");
        forecastCardEl.classList = "col bg-warning py-1 px-3";
        
        // create temperature element to hold temp data
        var tempTextEl = document.createElement('p');
        tempTextEl.classList = "fw-bold";
        var tempSpanEl = document.createElement('span');
        tempSpanEl.classList = "mx-2";
        tempTextEl.innerHTML = tempSpanEl;
        
        // create wind element to hold wind data
        var windTextEl = document.createElement('p');
        windTextEl.classList = "fw-bold";
        var windSpanEl = document.createElement('span');
        windSpanEl.classList = "mx-2";
        windTextEl.innerHTML = windSpanEl;

        // create humidity element to hold humidity data
        var humidityTextEl = document.createElement('p');
        humidityTextEl.classList = "fw-bold";
        var humiditySpanEl = document.createElement('span');
        humiditySpanEl.classList = "mx-2";
        humidityTextEl.innerHTML = humiditySpanEl;
        
        // create uv index element to hold uv index data
        var uvTextEl = document.createElement('p');
        uvTextEl.classList = "fw-bold";
        var uvTextEl = document.createElement('span');
        uvTextEl.classList = "badge alert-success text-light mx-2";
        uvTextEl.innerHTML = uvTextEl;
        
        // append to container
        forecastCardEl.appendChild(tempTextEl);
        forecastCardEl.appendChild(windTextEl);
        forecastCardEl.appendChild(humidityTextEl);
        forecastCardEl.appendChild(uvTextEl);
    
        // // check if issue is an actual issue or a pull request
        // if (issues[i].pull_request) {
        //     typeEl.textContent = "(Pull request)";
        // }
        // else {
        //     typeEl.textContent = "(Issue)";
        // }
    
        // append to container (wrapper0
        forecastWrapperEL.appendChild(forecastCardEl);
        
        // append to the dom
        issueContainerEl.appendChild(forecastEL);
    }
};

getWeather();