import React from 'react';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
//API
import apiKey from './config';
//Components
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';

function fetchData () {
 const[images, SetImages] = useState()
 useEffect(() => {
  fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d653b043c3a66ddc4bf96656f192f529&tags=sunsets&per_page=24&format=json&nojsoncallback=1")
 },[])
}

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

