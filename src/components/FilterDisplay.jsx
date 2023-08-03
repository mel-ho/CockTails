import React, { useState, useEffect } from "react";
import CocktailbyIDshort from "./CocktailbyIDshort";
import FilterBar from "./FilterBar";

const FilterDisplay = () => {
  const [cocktailsFiltered, setcocktailsFiltered] = useState([]);
  const [cocktailsFbyCategory, setCocktailsFbyCategory] = useState([]);
  const [cocktailsFbyGlass, setCocktailsFbyGlass] = useState([]);
  const [cocktailsFbyAlcoholic, setCocktailsFbyAlcoholic] = useState([]);
  const [filterCategory, setfilterCategory] = useState("");
  const [filterGlass, setfilterGlass] = useState("");
  const [filterAlcoholic, setfilterAlcoholic] = useState("");

  const getInitialFilter = async () => {
    try {
      setcocktailsFiltered([]);

      if (filterCategory) {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategory}`
        );
        // console.log(url);
        const dataCategory = await res.json();
        // console.log(dataCategory);
        setCocktailsFbyCategory(dataCategory.drinks);
      }
      if (filterGlass) {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${filterGlass}`
        );
        const dataGlass = await res.json();
        setCocktailsFbyGlass(dataGlass.drinks);
      }
      if (filterAlcoholic) {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterAlcoholic}`
        );
        const dataAlcoholic = await res.json();
        setCocktailsFbyAlcoholic(dataAlcoholic.drinks);
      }

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

  useEffect(() => {
    getInitialFilter();
  }, []);

  return (
    <div className="container">
      <FilterBar
        onCategoryChange={(e) => setfilterCategory(e.target.value)}
        onGlassChange={(e) => setfilterGlass(e.target.value)}
        onAlcoholicChange={(e) => setfilterAlcoholic(e.target.value)}
      ></FilterBar>
      <button type="submit" onClick={getInitialFilter}>
        Submit
      </button>

      <hr />
      {cocktailsFiltered.length > 0 && (
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
      )}
    </div>
  );
};

export default FilterDisplay;
