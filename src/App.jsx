import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ForecastPage from './ForecastPage';
import SurfForecastPage from './SurfForecastPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/forecast/:city" element={<ForecastPage />} />
                <Route path="/forecast/:city/surf" element={<SurfForecastPage />} />
            </Routes>
        </Router>
    );
}

export default App;




