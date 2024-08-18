// function getWeather() {
//     const cityInput = document.getElementById('cityInput').value;
//     const apiKey = '47a5f9b5ae9ceeb9b20bd0ec6f37e099'; // Replace with your OpenWeatherMap API key

//     if (cityInput === '') {
//         alert('Please enter a city name.');
//         return;
//     }

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const weatherInfo = document.getElementById('weatherInfo');
//             weatherInfo.innerHTML = `
//                 <p>City: ${data.name}</p>
//                 <p>Temperature: ${data.main.temp}°C</p>
//                 <p>Weather: ${data.weather[0].description}</p>
//             `;
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert('Error fetching weather data. Please try again.');
//         });
// }


function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '47a5f9b5ae9ceeb9b20bd0ec6f37e099'; // Replace with your OpenWeatherMap API key

    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const weatherIcon = getWeatherIcon(data.weather[0].id);
            
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${weatherIcon} ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function getWeatherIcon(weatherId) {
    // You can customize this function to map weather conditions to specific emojis
    // Refer to OpenWeatherMap documentation for weather condition codes: https://openweathermap.org/weather-conditions

    if (weatherId >= 200 && weatherId < 300) {
        // Thunderstorm
        return '⛈️';
    } else if (weatherId >= 300 && weatherId < 500) {
        // Drizzle
        return '🌦️';
    } else if (weatherId >= 500 && weatherId < 600) {
        // Rain
        return '🌧️';
    } else if (weatherId >= 600 && weatherId < 700) {
        // Snow
        return '❄️';
    } else if (weatherId >= 700 && weatherId < 800) {
        // Atmosphere
        return '🌫️';
    } else if (weatherId === 800) {
        // Clear sky
        return '☁';
    } else if (weatherId > 800 && weatherId < 900) {
        // Clouds
        return '☁️';
    } else {
        // Default emoji for unknown conditions
        return '🌍';
    }
}

