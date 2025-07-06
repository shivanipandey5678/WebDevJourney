import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherPage = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const result = await res.json();

        if (result.cod === 200) {
          setData(result);
          setError('');
        } else {
          setData(null);
          setError(result.message);
        }
      } catch {
        setError('Something went wrong!');
        setData(null);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Weather in {city}</h2>

      {error && <p style={{ color: 'red' }}> {error}</p>}

      {data && (
        <div>
          <p>Temperature: {data.main.temp}°C</p>
          <p> Humidity: {data.main.humidity}%</p>
          <p> Condition: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
