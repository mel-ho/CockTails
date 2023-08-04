import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Random from "./components/Random";
import FilterDisplay from "./components/FilterDisplay";
import Search from "./components/Search";
import Directory from "./components/Directory";
import NavBar from "./components/NavBar";
import DirectoryByAlpha from "./components/DirectoryByAlpha";
import CocktailbyID from "./components/CocktailbyID";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/random" element={<Random />} />
        <Route path="/filter" element={<FilterDisplay />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:alpha" element={<DirectoryByAlpha />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cocktail/:id" element={<CocktailbyID />} />
      </Routes>
    </div>
  );
}

export default App;
