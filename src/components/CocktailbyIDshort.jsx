import React, { useEffect, useState } from "react";

const CocktailbyIDshort = (props) => {
  const [cocktail, setCocktail] = useState([]);

  const getCocktail = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`
    );

    const data = await res.json();
    setCocktail(data.drinks[0]);
  };

  useEffect(() => {
    getCocktail();
  }, []);

  // console.log(cocktail);

  return (
    // <div>{JSON.stringify(cocktail)}</div>
    <div className="container">
      <h3>{cocktail.strDrink}</h3>
      <img className="cocktail" src={cocktail.strDrinkThumb} alt=""></img>
      <div>
        <p>
          <strong>Category: </strong>
          {cocktail.strCategory}
          <br />
          <strong>Alcohol: </strong>
          {cocktail.strAlcoholic}
          <br />
          <strong>Glass Type: </strong>
          {cocktail.strGlass}
        </p>
      </div>
    </div>
  );
};

export default CocktailbyIDshort;
