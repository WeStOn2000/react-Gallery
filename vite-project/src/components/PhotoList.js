import React from "react";

const PhotoList = () => {

    return (
        <ul>
            {photos.map(photos => (
                <Photo key={ } photo={ } />
            ))}
        </ul>
    );
}

export default PhotoList;