import React, { useEffect, useState } from "react";

const CocktailbyID = (props) => {
  const [cocktail, setCocktail] = useState([]);

  const getCocktail = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`
    );

    const data = await res.json();
    setCocktail(data.drinks[0]);
  };

  useEffect(() => {
    getCocktail(props.id);
  }, []);

  // console.log(cocktail);

  return (
    // <div>{JSON.stringify(cocktail)}</div>
    <div className="container">
      <h1>{cocktail.strDrink}</h1>
      <img className="cocktail" src={cocktail.strDrinkThumb} alt=""></img>
      <div>
        <p>
          <strong>Category: </strong>
          {cocktail.strCategory}
        </p>
        <p>
          <strong>Alcohol: </strong>
          {cocktail.strAlcoholic}
        </p>
        <p>
          <strong>Glass Type: </strong>
          {cocktail.strGlass}
        </p>
        <p>
          <strong>Instructions: </strong>
          {cocktail.strInstructions}
        </p>
        <p>
          <strong>Ingredients: </strong> <br />
          {cocktail.strMeasure1} {cocktail.strIngredient1} <br />
          {cocktail.strMeasure2} {cocktail.strIngredient2} <br />
          {cocktail.strMeasure3} {cocktail.strIngredient3} <br />
          {cocktail.strMeasure4} {cocktail.strIngredient4} <br />
          {cocktail.strMeasure5} {cocktail.strIngredient5} <br />
          {cocktail.strMeasure6} {cocktail.strIngredient6} <br />
          {cocktail.strMeasure7} {cocktail.strIngredient7}
        </p>
      </div>
    </div>
  );
};

export default CocktailbyID;
