// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ProjectComponent from "./components/ProjectComponent";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/projects" element={<ProjectComponent />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
