import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Random from "./components/Random";
import DisplayFilter from "./components/DisplayFilter";
import DIY from "./components/DIY";
import Directory from "./components/Directory";
import NavBar from "./components/NavBar";
import DirectorybyAlpha from "./components/DirectoryByAlpha";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/random" element={<Random />} />
        <Route path="/filter" element={<FilterBar />} />
        <Route path="/filter/:item" element={<DisplayFilter />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:item" element={<DirectorybyAlpha />} />
        <Route path="/diy" element={<DIY />} />
      </Routes>
    </div>
  );
}

export default App;
