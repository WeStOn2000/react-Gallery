import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./index.css";
// API key
import apiKey from './config';
// Components
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (query) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    setLoading(true); // Set loading to true before the fetch request
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImages(data.photos.photo);
        setLoading(false); // Set loading to false after the data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  useEffect(() => {
    // Fetch default data for "cats" when the app loads
    fetchData('cats');
  }, []);

  return (
    <div className="App">
      <Search onSearch={fetchData} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList photos={images} title="Cats" />} />
        <Route path="/dogs" element={<PhotoList photos={images} title="Dogs" />} />
        <Route path="/birds" element={<PhotoList photos={images} title="Birds" />} />
        <Route path="/search/:query" element={<PhotoList photos={images} title="Search Results" />} />
      </Routes>
    </div>
  );
}

export default App;

