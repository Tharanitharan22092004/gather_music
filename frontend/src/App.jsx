// import React from 'react';
// import Home from './pages/Home';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import PlaylistPage from './components/PlaylistPage';
// import PlaylistDetails from './components/PlayListDetails';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Songlist from './pages/Songlist'
// import { SearchProvider } from './components/SearchContext';


const App = () => {
  return (
    // <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<><Navbar/><Sidebar/><Songlist /></>} />
        </Routes>
      </Router>
  );
};

export default App;