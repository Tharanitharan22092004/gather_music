import React, { useEffect, useRef } from "react";

const Player = ({ song }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="player">
      <h2>
        Now Playing: {song.title} by {song.artist}
      </h2>
      <audio ref={audioRef} controls>
        <source src={song.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
