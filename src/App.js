import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import DetailsPage from './pages/DetailsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/reading" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
  );
}

export default App;
