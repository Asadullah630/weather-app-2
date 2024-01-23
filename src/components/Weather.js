
import React, { useState } from 'react';
import weatherImg from "../assets/weather.jpg";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = '7068363b061703b947217587b341c7e6';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Weather App</h1>
      <input
        type="search"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {weatherData && (
        <div>
         <img src={weatherImg} alt='images'/>
          <h2>{weatherData.name}</h2>
          <h3>Temperature: {weatherData.main.temp} K</h3>
          <h3>Humidity:    {weatherData.main.humidity}</h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
