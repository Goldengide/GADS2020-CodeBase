let searchForm = document.getElementById('search');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    cityName = document.getElementById('city');

    cityData = {
        'city': cityName.value,
        'appId': '247e7341e846c35a976a868d00ad47ec'
    }
    fetchWeatherAppApiByCity(cityData).then(data => {
        console.log(data);
        icon = document.getElementById('icon');
        icon.innerHTML = `<img class="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></img>`;
        temperature = document.getElementById('temperature');
        temperature.innerHTML = data.main.temp;
        city = document.getElementById('city-name')
        city.innerHTML = data.name + "<sup>" +data.sys.country + "</sup>";
        feels_like = document.getElementById('feels_like')
        feels_like.innerHTML = data.main.feels_like;
        humidity = document.getElementById('humidity')
        humidity.innerHTML = data.main.humidity;
        pressure = document.getElementById('pressure')
        pressure.innerHTML = data.main.pressure;
        wind = document.getElementById('wind')
        wind.innerHTML = data.wind.speed;
        description = document.getElementById('description')
        description.innerHTML = data.weather.description;

    });
    console.log(cityName.value);

});



async function fetchWeatherAppApiByCity(data) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.appId}`);
    let result = await response.json()
    return result;
    } catch (error) {
        console.log('Internet Hitch')
    }
    
}