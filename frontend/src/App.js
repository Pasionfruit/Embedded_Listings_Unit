import './App.css';
import React from 'react';
import ListingsPage from './pages/ListingsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
