import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ForecastPage from './ForecastPage';
import SurfForecastPage from './SurfForecastPage';
import NoBeachesPage from './NoBeachesPage'; // Import the NoBeachesPage component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/forecast/:city" element={<ForecastPage />} />
                <Route path="/forecast/:city/surf" element={<SurfForecastPage />} />
                <Route path="/no-beaches" element={<NoBeachesPage />} /> {/* Add NoBeachesPage route */}
            </Routes>
        </Router>
    );
}

export default App;




