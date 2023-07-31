import React, { useEffect, useState } from "react";
import CocktailShorts from "./CocktailShort";
import { useParams } from "react-router-dom";
import FilterBar from "./FilterBar";

const DisplayFilter = () => {
  const [cocktailsByGlass, setCocktailsByGlass] = useState([]);
  const params = useParams();

  const getCocktailsByGlass = async (glass) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${params.item}`
    );
    const data = await res.json();
    setCocktailsByGlass(data.drinks);
  };

  useEffect(() => {
    getCocktailsByGlass(params.item);
  }, [params.item]);

  return (
    <div className="container">
      <FilterBar></FilterBar>
      <br />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Picture</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cocktailsByGlass.map((item, idx) => {
            return (
              <CocktailShorts
                key={idx}
                name={item.strDrink}
                category={item.strCategory}
                alcohol={item.strAlcoholic}
                glass={item.strGlass}
                thumbnail={item.strDrinkThumb}
              ></CocktailShorts>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFilter;
