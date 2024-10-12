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
import PlaylistPage from './components/PlaylistPage';
import PlaylistDetails from './components/PlayListDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlaylistPage />} />
        <Route path="/playlist/:id" element={<PlaylistDetails />} />
      </Routes>
    </Router>
  );
};

export default App;