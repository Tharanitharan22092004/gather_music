import React, { useState, useEffect } from "react";
import Player from "./Player"; // Your player component
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import axios from "axios"; // Use axios for API requests

const PlaylistDetails = () => {
  const { id } = useParams(); // Get playlist ID from URL

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/gather/displaysongs?id=${id}`);
        setSongs(response.data); // Update with fetched songs
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSongs();
  }, [id]);

  const playSong = async (songId) => {
    if (!songId) {
      console.error("Song ID is undefined");
      return;
    }

    try {
      // Make a request to get the song URL from the backend
      const response = await axios.get(`http://localhost:5500/gather/song?id=${songId}`);
      
      // Assuming the response contains the song URL (response.data.fileUrl)
      const songUrl = response.data.fileUrl;
      
      // Set the song as the current song for the player
      setCurrentSong({
        ...songs.find((song) => song.id === songId),
        fileUrl: songUrl, // Set the song's file URL
      });
    } catch (err) {
      console.error("Error fetching song:", err);
    }
  };

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="playlist-details">
      <h1>Playlist Songs</h1>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-card"> {/* Fix the missing key prop */}
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button onClick={() => playSong(song.id)}>Play</button> {/* Ensure song.id exists */}
          </div>
        ))}
      </div>
      {/* Render the Player component if a song is selected */}
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default PlaylistDetails;
