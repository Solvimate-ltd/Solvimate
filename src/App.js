import React from "react";
import './index.css'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Carrer from "./Routes/Carrer"
import Services from "./Routes/Services"
import Overview from "./Routes/Overview"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Overview" element={<Overview/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Carrer" element={<Carrer/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>

    
    </>
  );
}

export default App;
