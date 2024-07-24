document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    const apiKey = '886da36f589c4c2ca6f135252242407'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.error) {
            alert(data.error.message);
        } else {
            displayWeatherData(data);
        }
    } catch (error) {
        alert('An error occurred while fetching weather data.');
        console.error(error);
    }
}

function displayWeatherData(data) {
    const weatherInfo = `
        <h2 class="text-2xl font-bold">${data.location.name}</h2>
        <p class="text-xl">Temperature: ${data.current.temp_c}°C</p>
        <p class="text-xl">Weather: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
