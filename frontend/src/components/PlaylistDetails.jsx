import React, { useState, useEffect } from "react";
import Player from "./Player"; // Your player component
import { useParams } from "react-router-dom"; // Import useParams for URL parameters

const playlistSongsData = {
  1: [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      audioUrl: "/songs/song1.mp3",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      audioUrl: "/songs/song2.mp3",
    },
    // Add more songs for this playlist
  ],
  2: [
    {
      id: 1,
      title: "Pop Song 1",
      artist: "Pop Artist 1",
      audioUrl: "/songs/popsong1.mp3",
    },
    {
      id: 2,
      title: "Pop Song 2",
      artist: "Pop Artist 2",
      audioUrl: "/songs/popsong2.mp3",
    },
  ],
  // Add other playlists' songs
};

const PlaylistDetails = () => {
  // Use useParams to get the id from the route
  const { id } = useParams();

  // State to store the songs of the selected playlist
  const [songs, setSongs] = useState([]);

  // State to manage the currently playing song
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Fetch the playlist songs from the static data based on the id from the URL
    setSongs(playlistSongsData[id] || []);
  }, [id]); // Rerun when the id changes

  const playSong = (song) => {
    // Set the song that is currently playing
    setCurrentSong(song);
  };

  return (
    <div className="playlist-details">
      <h1>Playlist Songs</h1>
      <div className="song-list">
        {/* Loop through the songs and render them */}
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button onClick={() => playSong(song)}>Play</button>
          </div>
        ))}
      </div>
      {/* Render the Player component if a song is selected */}
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default PlaylistDetails;
