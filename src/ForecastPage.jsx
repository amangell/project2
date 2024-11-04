import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ForecastPage = () => {
    const { city } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9f0ce18a5733b4ae233d9e3a21a5669&units=imperial`
                );
                if (!response.ok) {
                    throw new Error('City not found');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSurfForecast = () => {
        if (weatherData && weatherData.coord) {
            navigate(`/forecast/${city}/surf`, {
                state: {
                    latitude: weatherData.coord.lat,
                    longitude: weatherData.coord.lon
                }
            });
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Weather Forecast for {city}</h1>
            {weatherData && (
                <div>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} mph</p>
                    <p>Wind Gust: {weatherData.wind.gust || 'N/A'} mph</p>
                    <p>Wind Direction: {weatherData.wind.deg}°</p>
                    <button onClick={handleSurfForecast} style={{ marginTop: '15px' }}>
                        View Surf Forecast
                    </button>
                </div>
            )}
                        <button onClick={handleGoBack} style={{ marginTop: '20px' }}>
                Go Back
            </button>
        </div>
    );
};

export default ForecastPage;

