import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Random from "./components/Random";
import Filter from "./components/Filter";
import DIY from "./components/DIY";
import Directory from "./components/Directory";
import NavBar from "./components/NavBar";
import DirectorybyAlpha from "./components/DirectoryByAlpha";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/random" element={<Random />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:item" element={<DirectorybyAlpha />} />
        <Route path="/diy" element={<DIY />} />
      </Routes>
    </div>
  );
}

export default App;
