import React, { useState } from "react";
import CocktailbyIDshort from "./CocktailbyIDshort";
import FilterBar from "./FilterBar";

const FilterDisplay = () => {
  const [cocktailsFiltered, setcocktailsFiltered] = useState([]);
  const [filterCategory, setfilterCategory] = useState("");
  const [filterGlass, setfilterGlass] = useState("");
  const [filterAlcoholic, setfilterAlcoholic] = useState("");

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
  };

  const getInitialFilter = async () => {
    try {
      const categoryPromise = filterCategory
        ? fetchData(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategory}`
          )
        : Promise.resolve([]);

      const glassPromise = filterGlass
        ? fetchData(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${filterGlass}`
          )
        : Promise.resolve([]);

      const alcoholicPromise = filterAlcoholic
        ? fetchData(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterAlcoholic}`
          )
        : Promise.resolve([]);

      const [cocktailsFbyCategory, cocktailsFbyGlass, cocktailsFbyAlcoholic] =
        await Promise.all([categoryPromise, glassPromise, alcoholicPromise]);

      const filteredData = cocktailsFbyCategory
        .filter((categoryItem) =>
          cocktailsFbyGlass.some(
            (glassItem) => glassItem.idDrink === categoryItem.idDrink
          )
        )
        .filter((glassItem) =>
          cocktailsFbyAlcoholic.some(
            (alcoholicItem) => alcoholicItem.idDrink === glassItem.idDrink
          )
        );

      setcocktailsFiltered(filteredData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleFilterSubmit = () => {
    setcocktailsFiltered([]);
    getInitialFilter();
  };

  return (
    <div className="container">
      <hr></hr>
      <h3>Please select all 3 parameters and click the submit button</h3>
      <FilterBar
        onCategoryChange={(e) => setfilterCategory(e.target.value)}
        onGlassChange={(e) => setfilterGlass(e.target.value)}
        onAlcoholicChange={(e) => setfilterAlcoholic(e.target.value)}
      ></FilterBar>
      <button type="submit" onClick={handleFilterSubmit}>
        Submit
      </button>

      <hr />
      {cocktailsFiltered.length > 0 ? (
        <div className="row">
          {cocktailsFiltered.map((item, idx) => {
            return (
              <div className="col-md-3">
                <CocktailbyIDshort
                  key={idx}
                  id={item.idDrink}
                ></CocktailbyIDshort>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No cocktails found.</p>
      )}
    </div>
  );
};

export default FilterDisplay;
