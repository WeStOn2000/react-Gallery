import PropTypes from "prop-types"

function Photo({ photo}) {
  // Construct the URL for the image using Flickr's image URL structure
  const imgSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

  return (
    <li>
      {/* Display the photo using an img element */}
      <img src={imgSrc} alt={photo.title} />
    </li>
  );
}

Photo.propTypes = {
  photo: PropTypes.shape({
    server: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photo;
