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
        // icon.src = "http://openweathermap.org/img/wn/04n@2x.png";
        // icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        // console.log(data.weather[0].icon);
        // console.log(icon.src);
        icon = document.getElementById('icon');
        icon.innerHTML = `<img class="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></img>`;
        console.log(icon); 
        temperature = document.getElementById('temperature');
        temperature.innerHTML = data.main.temp;
        city = document.getElementById('city-name')
        city.innerHTML = data.name + "<sup>" +data.sys.country + "</sup>";
    });
    console.log(cityName.value);

});



async function fetchWeatherAppApiByCity(data) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.appId}`);
    let result = await response.json()
    return result;
}