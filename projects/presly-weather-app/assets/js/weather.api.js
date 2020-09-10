let searchForm = document.getElementById('search');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    cityName = document.getElementById('city');

    data = {
        'city': cityName,
        'appId': '247e7341e846c35a976a868d00ad47ec'
    }
    fetchWeatherAppApiByCity(cityData).then(data => {
        console.log(data);
        let insertPoint;
        insertPoint = document.getElementById('weather')
        // insertPoint.innerHTML = JSON.stringify(data.current.temp);
    });
    console.log(cityName.value);

})

let cityData = {
    'city': "Ile-Ife",
    'appId': '247e7341e846c35a976a868d00ad47ec'
}
async function fetchWeatherAppApiByCity(data) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.appId}`);
    let result = await response.json()
    return result;
}