// components/AlbumSection.jsx
import React from "react";
import AlbumCard from "./AlbumCard";

const AlbumSection = ({ title, albums }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ml-40 mr-6">
      <div className="flex justify-between w-full text-white">
        <h2>{title}</h2>
        <h2>Show All</h2>
      </div>
      <div className="flex justify-center items-center gap-5">
        {albums.map((album, index) => (
          <AlbumCard key={index} title={album.title} imageUrl={album.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;
