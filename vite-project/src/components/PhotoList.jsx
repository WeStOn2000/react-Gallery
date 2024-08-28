import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PhotoList({ fetchData, query, photos, title }) {
  // useParams hook to get the query parameter from the url
  const params = useParams();
  const currentQuery = query || params.query;// Determine the current query (prop or URL param)

  // useEffect to fetch new data whenever the query changes
  useEffect(() => {
    if (currentQuery) {
      fetchData(currentQuery);// Fetch data based on the current query
    }
  }, [currentQuery, fetchData]);

  return (
    <div className="photo-container">
      <h2>{title}</h2>
      {photos.length > 0 ? (
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt={photo.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}  

export default PhotoList;


