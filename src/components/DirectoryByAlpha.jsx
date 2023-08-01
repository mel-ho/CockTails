import React, { useEffect, useState } from "react";
import CocktailShort from "./CocktailShort";
import { useParams } from "react-router-dom";
import Directory from "./Directory";

const DirectorybyAlpha = () => {
  const [cocktailsByAlpha, setCocktailsByAlpha] = useState([]);
  const params = useParams();

  const getCocktailsByAlpha = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${params.alpha}`
    );
    const data = await res.json();
    setCocktailsByAlpha(data.drinks);
  };

  useEffect(() => {
    getCocktailsByAlpha(params.alpha);
  }, [params.alpha]);

  return (
    <div className="container">
      <Directory></Directory>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Picture</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cocktailsByAlpha.map((item, idx) => {
            return (
              <CocktailShort
                key={idx}
                name={item.strDrink}
                category={item.strCategory}
                alcohol={item.strAlcoholic}
                glass={item.strGlass}
                thumbnail={item.strDrinkThumb}
              ></CocktailShort>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DirectorybyAlpha;
