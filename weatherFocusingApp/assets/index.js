const API_KEY = 'af4a386d566ddf960fa0f75f42a6e63a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Function to get weather information for the specified city
function getWeather(city) {
    const cityInput = document.getElementById('cityInput').value || city;
    if (cityInput) {
        fetch(`${BASE_URL}?q=${cityInput}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => displayWeather(data, cityInput))
            .catch(error => console.error('Error fetching data:', error));
    }
}

// Function to display the weather information
function displayWeather(data, city) {
    if (data.cod !== '200') {
        alert('Error fetching data: ' + data.message);
        return;
    }

    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = '';

    const forecast = {};
    data.list.forEach(entry => {
        const date = entry.dt_txt.split(' ')[0];
        if (!forecast[date]) {
            forecast[date] = entry;
        }
    });

    const days = Object.keys(forecast).slice(0, 5);
    days.forEach((day, index) => {
        const weatherInfo = forecast[day];
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';

        // Determine the day label
        let dayLabel;
        if (index === 0) {
            dayLabel = `Today ${city}`;
        } else {
            const date = new Date(day);
            dayLabel = date.toLocaleDateString('en-US', { weekday: 'long' });
        }

        // Weather icon URL
        const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`;

        if (index === 0) {
            dayDiv.innerHTML = `
                <h3>${dayLabel}</h3>
                <img src="${iconUrl}" alt="${weatherInfo.weather[0].description}">
                <p>${weatherInfo.weather[0].description}</p>
                <p>Temp: ${weatherInfo.main.temp} °C</p>
                <p>Humidity: ${weatherInfo.main.humidity}%</p>
            `;
        } else {
            dayDiv.innerHTML = `
                <h3>${dayLabel}</h3>
                <img src="${iconUrl}" alt="${weatherInfo.weather[0].description}">
                <p>Temp: ${weatherInfo.main.temp} °C</p>
            `;
        }

        weatherDiv.appendChild(dayDiv);
    });
}

// Call getWeather to show default weather for Nyahururu
getWeather('Nyahururu');

// Add input event listener to update weather information when the user types a city name
document.getElementById('cityInput').addEventListener('input', () => {
    getWeather();
});
