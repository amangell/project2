import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.trim()) {
            navigate(`/forecast/${city}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to Better Surfline</h1>
            <h5>Providing useful information since last week</h5>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch} style={{ marginLeft: '10px' }}>
                Search
            </button>
        </div>
    );
};

export default SearchPage;
