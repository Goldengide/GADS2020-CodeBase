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
        // jsonData = JSON.stringify(data);
        // console.log(jsonData);
        let insertPoint;
        temperature = document.getElementById('temperature')
        temperature.innerHTML = data.main.temp;
        city = document.getElementById('city-name')
        city.innerHTML = data.name + "<sup>" +data.sys.country + "</sup>";
    });
    console.log(cityName.value);

})


async function fetchWeatherAppApiByCity(data) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.appId}`);
    let result = await response.json()
    return result;
}