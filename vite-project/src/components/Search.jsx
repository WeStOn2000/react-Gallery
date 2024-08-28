import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function Search({onSearch}) {
  // Local state to manage the search query input
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSearch(searchText); // Call the onSearch prop with the current search query
    navigate(`/search/${searchText}`); // Navigate to the search results route
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {/* Input field for entering the search query */}
      <input 
        type="search" 
        name="search" 
        placeholder="Search..." 
        onChange={e => setSearchText(e.target.value)} // Update state with input value
        value={searchText} // Bind input value to the state
        required 
      />
      {/* Submit button */}
      <button type="submit" className="search-button">
        <svg fill="#fff" height="24" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9 14.32h-...."/>
        </svg>
      </button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;

