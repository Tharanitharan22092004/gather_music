import React from "react";

const Sidebar = () => {
  return (
    <div className="flex-col px-7 py-20 gap-4 w-36 z-10 h-screen fixed text-white   bg-slate-950">
      <h2>Your Library</h2>
      <ul>
        <li>Liked Songs</li>
        <li>Playlists</li>
        <li>Recents</li>
      </ul>
    </div>
  );
};

export default Sidebar;
