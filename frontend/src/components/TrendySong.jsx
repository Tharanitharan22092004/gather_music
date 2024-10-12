// components/TrendySong.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const songs = [
  { title: "Song 1", imageUrl: "/assets/Images/song1.png" },
  { title: "Song 2", imageUrl: "/assets/Images/song2.png" },
  { title: "Song 3", imageUrl: "/assets/Images/song3.png" },
  { title: "Song 4", imageUrl: "/assets/Images/song2.png" },
  { title: "Song 5", imageUrl: "/assets/Images/song1.png" },
];

const TrendySong = () => {
  return (
    <div className="song-slider p-4">
      <h2 className="text-center text-2xl font-bold mb-6">Trending Songs</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 7000 }} // Automatic sliding
        className="mySwiper"
      >
        {songs.map((song, index) => (
          <SwiperSlide key={index}>
            <div className="song-card flex flex-col items-center">
              <img
                src={song.imageUrl}
                alt={song.title}
                className="rounded-lg object-cover" 
                style={{
                  width: "900px", // Fixed width for a small, neat look
                  height: "400px", // Height to match the width for a square aspect ratio
                }}
              />
              <h3 className="mt-2 text-lg font-semibold">{song.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendySong;
