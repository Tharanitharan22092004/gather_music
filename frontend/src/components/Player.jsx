import React, { useEffect, useRef } from "react";

const Player = ({ song }) => {
  const audioRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    const playAudio = async () => {
      console.log(audioRef.current,"audio");
      if (audioRef.current) {
        try {
          await audioRef.current.play(); // Play the audio
          console.log("Playing:", song.title); // Log the song title
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    };

    playAudio(); // Call the function to play the audio 
    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause when the component unmounts
        audioRef.current.currentTime = 0; // Reset to start
      }
    };
  }, [song]); // Add song as a dependency to play the new song when it changes

  return (
    <div className="player w-full max-w-3xl mx-auto"> {/* Tailwind classes for width */}
      <audio ref={audioRef} className="w-11/12" controls src={song.fileUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};


export default Player;
