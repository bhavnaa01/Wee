// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodeComponent from './QRCodeComponent.jsx'; // Import your QR code component
import ShowImage from './ShowImage.jsx';  // Component to display the image

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to show QR code */}
        <Route exact path="/" element={<QRCodeComponent/>} />
        
        {/* Route to display the image after scanning */}
        <Route path="/show-image" element={<ShowImage/>} />
      </Routes>
    </Router>
  );
}

export default App;

