import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import "./index.css";//Importing the css file for styling
// API key
import apiKey from './config';//Importing the flickr API from config.js
//Importing Components
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';
import NotFound from "./components/NotFound";

function App() {
  //State to store fetched images and loading status
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
// Function to fetch data from flickr ApI based on query
  const fetchData = (query) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    setLoading(true); // Set loading to true before the fetch request
    fetch(url)
      .then(response => response.json())// Parse the response as JSON
      .then(data => {
        setImages(data.photos.photo);// Update state with fetched images
        setLoading(false); // Set loading to false after the data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);//Log any errors
        setLoading(false); // Set loading to false in case of an error
      });
  };

 


  return (
    <div className="App">
      <Search onSearch={fetchData} />
      <Nav />
      {loading && <p>Loading...</p>}{/*Display loading indicator when fetching data*/}
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList fetchData={fetchData} query="cats" photos={images} title="Cats" />} />
        <Route path="/dogs" element={<PhotoList fetchData={fetchData} query="dogs" photos={images} title="Dogs" />} />
        <Route path="/birds" element={<PhotoList fetchData={fetchData} query="birds" photos={images} title="Birds" />} />
        <Route path="/search/:query" element={<PhotoList fetchData={fetchData} photos={images} title="Search Results" />} />
        <Route path="*" element={<NotFound />} /> {/*404 error route*/} 
      </Routes>
    </div>
  );
}

export default App;



