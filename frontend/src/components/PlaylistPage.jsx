// components/PlaylistPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const playlistsData = [
  { id: 1, name: "Top Hits", imageUrl: "/assets/Images/image1.png" },
  { id: 2, name: "Pop Hits", imageUrl: "/assets/Images/image2.png" },
  { id: 3, name: "Classical Moods", imageUrl: "/assets/Images/image3.png" }
];

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // You can fetch playlists from an API or use static data
    setPlaylists(playlistsData);
  }, []);

  return (
    <div className="playlist-page">
      <h1>Playlists</h1>
      <div className="grid grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <Link to={`/playlist/${playlist.id}`}>
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="rounded-md"
              />
              <h3>{playlist.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
