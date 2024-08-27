import React from "react";

const Photo = ({ photo }) => {
    const imgSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
    return (
            <img src={imgSrc} alt={photo.title}/>
    );
}

export default Photo;