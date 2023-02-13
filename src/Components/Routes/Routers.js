import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Home';
import Education from '../Education';
import About from '../About';
import Abouts from '../Abouts';
// import Services from '../Services';
import Contact from '../Contact';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/About" element={<About />} />
        <Route path="/Abouts" element={<Abouts />} />
        {/* <Route path="/Services" element={<Services />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routers
