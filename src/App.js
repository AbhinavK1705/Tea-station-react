import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";

import Card from "./components2/Card";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components2/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Your navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Card />} />
          {/* Add more routes here for other pages */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
