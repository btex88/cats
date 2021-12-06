import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Display from './pages/Display';

const RoutePath = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/status/:id" element={<Display />} />
    </Routes>
  </Router>
);

export default RoutePath;
