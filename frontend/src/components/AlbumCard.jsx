import React from "react";

const AlbumCard = ({ title, imageUrl }) => {
  return (
    <div className="album-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default AlbumCard;
