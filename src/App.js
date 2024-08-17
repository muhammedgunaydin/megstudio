// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AppAdsTxt from './AppAdsTxt';

function App() {
  return (
    <Router basename="/megstudio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-ads.txt" element={<AppAdsTxt />} />
      </Routes>
    </Router>
  );
}

export default App;

