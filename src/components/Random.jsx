import React, { useState, useEffect } from "react";
import Cocktail from "./Cocktail";

const Random = () => {
  const [cocktails, setCocktail] = useState([]);

  const getCocktails = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setCocktail(data.drinks);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div className="container">
      {cocktails.map((item, idx) => {
        return (
          <Cocktail
            key={idx}
            name={item.strDrink}
            category={item.strCategory}
            alcohol={item.strAlcoholic}
            glass={item.strGlass}
            thumbnail={item.strDrinkThumb}
            instructions={item.strInstructions}
            ingredient1={item.strIngredient1}
            ingredient1str={item.strMeasure1}
            ingredient2={item.strIngredient2}
            ingredient2str={item.strMeasure2}
            ingredient3={item.strIngredient3}
            ingredient3str={item.strMeasure3}
            ingredient4={item.strIngredient4}
            ingredient4str={item.strMeasure4}
            ingredient5={item.strIngredient5}
            ingredient5str={item.strMeasure5}
            ingredient6={item.strIngredient6}
            ingredient6str={item.strMeasure6}
            ingredient7={item.strIngredient7}
            ingredient7str={item.strMeasure7}
          ></Cocktail>
        );
      })}
    </div>
  );
};

export default Random;
