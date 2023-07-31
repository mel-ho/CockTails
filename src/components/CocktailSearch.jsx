import React, { useState } from "react";
import Cocktail from "./Cocktail";

const CocktailSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchID, setSearchID] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm, searchID);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
      setSearchID(data.drinks[0].idDrink || []);
      console.log(searchID);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchID}`
      );
      const data = await res.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    console.log(cocktails);
  };

  return (
    <div>
      <br />
      <form className="centered" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="cocktail name?"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {cocktails.length > 0 && (
        <div>
          <Cocktail
            name={cocktails[0].strDrink}
            category={cocktails[0].strCategory}
            alcohol={cocktails[0].strAlcoholic}
            glass={cocktails[0].strGlass}
            thumbnail={cocktails[0].strDrinkThumb}
            instructions={cocktails[0].strInstructions}
            ingredient1={cocktails[0].strIngredient1}
            ingredient1str={cocktails[0].strMeasure1}
            ingredient2={cocktails[0].strIngredient2}
            ingredient2str={cocktails[0].strMeasure2}
            ingredient3={cocktails[0].strIngredient3}
            ingredient3str={cocktails[0].strMeasure3}
            ingredient4={cocktails[0].strIngredient4}
            ingredient4str={cocktails[0].strMeasure4}
            ingredient5={cocktails[0].strIngredient5}
            ingredient5str={cocktails[0].strMeasure5}
            ingredient6={cocktails[0].strIngredient6}
            ingredient6str={cocktails[0].strMeasure6}
            ingredient7={cocktails[0].strIngredient7}
            ingredient7str={cocktails[0].strMeasure7}
          ></Cocktail>
        </div>
      )}
    </div>
  );
};

export default CocktailSearch;
