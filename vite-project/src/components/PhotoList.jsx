import { useEffect , useRef} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function PhotoList({ fetchData, query, photos, title }) {
  // useParams hook to get the query parameter from the URL
  const params = useParams();
  const currentQuery = query || params.query; // Determine the current query (prop or URL param)
  const fetchDataRef = useRef(fetchData);
  // useEffect to fetch new data whenever the query changes
  useEffect(() => {
    fetchDataRef.current = fetchData;
  }, [fetchData]);
  
  useEffect(() => {
    if (currentQuery) {
      fetchDataRef.current(currentQuery); // Fetch data based on the current query
    }
  }, [currentQuery]); // Removed fetchData from the dependency array

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
        <p>No matches found</p> // Display this when there are no matches
      )}
    </div>
  );
}
PhotoList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  query: PropTypes.string,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      server: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default PhotoList;



