import React from "react";
import Photo from "./Photo";

const PhotoList = ({ images, loading }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Photo Gallery</h2>
            <div className="photo-container">
                <ul>
                    {images.map((photo) => (
                        <li key={photo.id}>
                            <Photo photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PhotoList;