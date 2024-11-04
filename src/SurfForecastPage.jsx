import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SurfForecastPage = () => {
    const location = useLocation();
    const { latitude, longitude } = location.state || {};
    const [surfData, setSurfData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSurfForecast = async () => {
            if (!latitude || !longitude) {
                setError("Location coordinates not available.");
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&current=wave_height,wave_direction,wave_period`
                );
                if (!response.ok) {
                    throw new Error('Surf forecast data not available');
                }
                const data = await response.json();
                setSurfData(data.current);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSurfForecast();
    }, [latitude, longitude]);

    if (loading) return <p>Loading surf forecast...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Surf Forecast</h1>
            {surfData && (
                <div>
                    <p>Wave Height: {surfData.wave_height} meters</p>
                    <p>Wave Direction: {surfData.wave_direction}°</p>
                    <p>Wave Period: {surfData.wave_period} seconds</p>
                </div>
            )}
        </div>
    );
};

export default SurfForecastPage;
