import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ForecastPage from './ForecastPage';
import SurfForecastPage from './SurfForecastPage';
import NoBeachesPage from './NoBeachesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/forecast/:city" element={<ForecastPage />} />
                <Route path="/forecast/:city/surf" element={<SurfForecastPage />} />
                <Route path="/no-beaches" element={<NoBeachesPage />} />
            </Routes>
        </Router>
    );
}

export default App;




