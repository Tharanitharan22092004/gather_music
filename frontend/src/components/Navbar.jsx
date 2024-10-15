import React, { useContext, useState } from "react";
// import { SearchContext } from "./SearchContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // const {searchTerm, setSearchTerm} = useContext(SearchContext);
  // const location = useLocation();
  return (
    <nav className="navbar bg-black flex h-14 fixed w-full z-20 text-white">

        <div className="flex justify-between w-full ">
          <div><h1 className="">Music App</h1></div>
          <div className="w-96 py-2 flex justify-center">
            <input
              className="rounded-full w-96 px-5 text-black"
              type="text"
              // value={searchsong}
              // onChange={(e)=>setsearch(e.target.value)}
              placeholder="What do you want to play?"
            />
          </div>
          <div>
            <h1>hi</h1>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
