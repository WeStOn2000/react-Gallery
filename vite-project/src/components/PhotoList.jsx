import React from "react";
import Photo from "./Photo";

const PhotoList = ({ photos, title }) => {
    return (
      <div>
        <h2>{title}</h2>
        <div className="photo-container">
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <Photo photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default PhotoList;