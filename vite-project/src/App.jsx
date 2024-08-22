import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <div className="App">
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  );
}

export default App;

