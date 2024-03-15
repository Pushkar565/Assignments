async function getData(city) {
  let APIkey = "29ee10f04e3103478aff16b48e4b2908";
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`);
  let weatherData = await response.json();
  console.log(weatherData);
  displayData(city, weatherData); // Pass city and weather data to displayData function
}

async function city() {
  let cityInput = document.getElementById('input').value; // Get the city name from the input field
  await getData(cityInput); // Call getData with the city input
}

async function displayData(city, weatherData) {
  let minTemp = weatherData.list[0].main.temp_min; 
  let maxTemp = weatherData.list[0].main.temp_max;
  let wind = weatherData.list[0].wind.speed;
  let clouds = weatherData.list[0].clouds.all;
  let sunriseTimestamp = weatherData.city.sunrise; // Sunrise time in UNIX timestamp format
  let sunsetTimestamp = weatherData.city.sunset; // Sunset time in UNIX timestamp format

  // Convert sunrise and sunset timestamps to readable time
  let sunriseTime = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
  let sunsetTime = new Date(sunsetTimestamp * 1000).toLocaleTimeString();

  let div = document.createElement('div');
  div.innerHTML = `<h4>Min. Temp: ${minTemp}°C</h4>
                   <h4>Max. Temp: ${maxTemp}°C</h4>
                   <h4>Wind: ${wind} m/s</h4>
                   <h4>Clouds: ${clouds}%</h4>
                   <h4>Sunrise: ${sunriseTime}</h4>
                   <h4>Sunset: ${sunsetTime}</h4>`;

  let container = document.getElementById('container2');
  container.appendChild(div);

  let Container = document.getElementById('container');
  const mapHtml = `
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe width="250" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <a href="https://123movies-i.net">123movies</a><br>
        <style>.mapouter{position:relative;text-align:right;height:500px;width:250px;}</style>
        <a href="https://www.embedgooglemap.net">google maps embed</a>
        <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:250px;}</style>
      </div>
    </div>
  `;

  Container.innerHTML = mapHtml; // Set innerHTML to add the map to the container

  console.log(weatherData); // For demonstration, log the data to the console
}

document.getElementById('button').addEventListener('click', city);