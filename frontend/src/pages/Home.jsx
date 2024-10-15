import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import TrendySong from "../components/TrendySong";
import AlbumSection from "../components/AlbumSection";


const albums = [
  { title: "Album 1", imageUrl: "/assets/Images/image1.png" },
  { title: "Album 2", imageUrl: "/assets/Images/image2.png" },
  { title: "Album 3", imageUrl: "/assets/Images/image3.png" },
  { title: "Album 4", imageUrl: "/assets/Images/image4.png" },
  { title: "Album 1", imageUrl: "/assets/Images/image1.png" },
  { title: "Album 2", imageUrl: "/assets/Images/image2.png" },
  { title: "Album 3", imageUrl: "/assets/Images/image3.png" },
  { title: "Album 4", imageUrl: "/assets/Images/image4.png" }
];


const Home = () => {
  return (
    <div className="">
      {/* <div>
        <Navbar />
      </div> */}
      <div className="content">
        <Sidebar />
      </div>
      <div className="bg-slate-900">
      <div>
          <TrendySong/>
        </div>
        <AlbumSection title="Popular Albums" albums={albums} />
        <AlbumSection title="Top Hits" albums={albums} />
        <AlbumSection title="New Releases" albums={albums} />
        <AlbumSection title="Editor's Picks" albums={albums} />
      </div>
    </div>
    
  );
};

export default Home;
