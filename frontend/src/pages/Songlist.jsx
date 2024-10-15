import React, { useEffect, useState } from 'react'
import Player from "../components/Player"; // Your player component
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import axios from "axios"; // Use axios for API requests
import '../App.css'

function Songlist() {
    const { id } = useParams(); // Get playlist ID from URL

    // const audioRef = useRef(null);
    const [Songs,setsongs]=useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSong, setCurrentSong] = useState(null);


    useEffect(()=>{
        const fetchsongs =async()=>{
            try{
                const res=await axios.get(`http://localhost:5500/gather/displaysongs?id=${id}`);
                setsongs(res.data);
                // console.log("songs",Songs)
            }catch(e){
                console.log("error in fetching..");
            }
            setLoading(false);
        };
        fetchsongs();
    },[id]);

    // useEffect(() => {
    //     console.log("Updated songs:", Songs);
    //   }, [Songs]);

    const playSong = async (songId) => {
        console.log("song id",songId);
        if (!songId) {
          console.error("Song ID is undefined");
          return;
        }
      
        try {
          // Make a request to get the song file from the backend
          const response = await axios.get(`http://localhost:5500/gather/song?id=${songId}`, {
            responseType: 'blob', // Important: Set the response type to blob for file data
          });
          
          // Create a Blob URL for the audio file
          const songBlob = new Blob([response.data], { type: 'audio/mpeg' }); // Assuming the song is an mp3 file
          const songUrl = URL.createObjectURL(songBlob);
      
          // Set the song as the current song for the player
          setCurrentSong({
            ...Songs.find((song) => song.id === songId),
            fileUrl: songUrl, // Set the Blob URL for playback
          });
        } catch (err) {
          console.error("Error fetching song:", err);
        }
      };

      if (loading) return <p>Loading songs...</p>;

  return (
    <div className='flex justify-between w-full h-screen '>
        <div className='flex flex-col justify-between w-full pt-16 overflow-auto '>
            <div className="flex flex-col gap-4 w-11/12 ml-36">
            {Songs.map((songId) => (
                <div key={songId} className="flex flex-row justify-around align-middle gap-4  w-full hover:bg-stone-300">
                <button onClick={() => playSong(songId)}>Play</button>
                <img width={"35px"} height={"60px"} src="/assets/Images/image3.png" alt="pic" />
                <h3>devara</h3>
                <p>4.00s</p>
                </div>
            ))}
            
            </div>
        <div className='flex justify-center fixed bottom-0 left-0 right-0'>
            {currentSong && <Player song={currentSong} />}
        </div>
        </div> 

        <div className='w-4/12 pt-16 p-2 pr-0 flex flex-col gap-1 bg-slate-900 h-screen'>
            <h1>Playlist</h1>
            <img width={"400px"} height={"40px"} src="/assets/Images/image3.png" alt="pic" />
            <h1>Song  Title</h1>
            <h1>Artist</h1>
            <h1>4.00s</h1>
        </div>
    </div>
  )
}

export default Songlist;