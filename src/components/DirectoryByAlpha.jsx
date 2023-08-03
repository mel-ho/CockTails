import React, { useEffect, useState } from "react";
import CocktailOverlay from "./CocktailOverlay";
import { useParams } from "react-router-dom";
import Directory from "./Directory";

const DirectoryByAlpha = () => {
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
      <div className="row">
        {cocktailsByAlpha.map((item, idx) => {
          return (
            <div className="col-md-3">
              <CocktailOverlay
                key={idx}
                name={item.strDrink}
                category={item.strCategory}
                alcohol={item.strAlcoholic}
                glass={item.strGlass}
                thumbnail={item.strDrinkThumb}
                instruction={item.strInstructions}
                strMeasure1={item.strMeasure1}
                strIngredient1={item.strIngredient1}
                strMeasure2={item.strMeasure2}
                strIngredient2={item.strIngredient2}
                strMeasure3={item.strMeasure3}
                strIngredient3={item.strIngredient3}
                strMeasure4={item.strMeasure4}
                strIngredient4={item.strIngredient4}
                strMeasure5={item.strMeasure5}
                strIngredient5={item.strIngredient5}
                strMeasure6={item.strMeasure6}
                strIngredient6={item.strIngredient6}
                strMeasure7={item.strMeasure7}
                strIngredient7={item.strIngredient7}
              ></CocktailOverlay>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DirectoryByAlpha;
