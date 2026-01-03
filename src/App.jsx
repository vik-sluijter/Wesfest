import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Feed from "./Feed.jsx";
import Navbar from "./components/nav/Navbar.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
};

export default App;
