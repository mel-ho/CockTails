import React, { useState, useEffect } from "react";
import CocktailbyID from "./CocktailbyID";

const Random = () => {
  const [cocktails, setCocktail] = useState([]);

  const getCocktails = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setCocktail(data.drinks[0]);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div className="container">
      <div>
        {/* {JSON.stringify(cocktails.idDrink)} */}
        {cocktails.idDrink && (
          <CocktailbyID id={cocktails.idDrink}></CocktailbyID>
        )}
      </div>
    </div>
  );
};

export default Random;
