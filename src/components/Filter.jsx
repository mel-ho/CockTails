import React, { useEffect, useState } from "react";
import DisplayFilter from "./DisplayFilter";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);

  const getCategories = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await res.json();
    setCategories(data.drinks);
  };

  const getGlasses = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
    );
    const data = await res.json();
    setGlasses(data.drinks);
  };

  const getIngredients = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
    const data = await res.json();
    setIngredients(data.drinks);
  };

  const getAlcoholic = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await res.json();
    setAlcoholic(data.drinks);
  };
  useEffect(() => {
    getCategories();
    getGlasses();
    getIngredients();
    getAlcoholic();
  }, []);

  return (
    <div>
      <div className="filterbar">
        <select>
          {categories.map((item, idx) => {
            return <option key={idx}>{item.strCategory}</option>;
          })}
        </select>
        <select>
          {glasses.map((item, idx) => {
            return <option key={idx}>{item.strGlass}</option>;
          })}
        </select>
        <select>
          {ingredients.map((item, idx) => {
            return <option key={idx}>{item.strIngredient1}</option>;
          })}
        </select>
        <select>
          {alcoholic.map((item, idx) => {
            return <option key={idx}>{item.strAlcoholic}</option>;
          })}
        </select>
      </div>
      <div className="display">
        <DisplayFilter></DisplayFilter>
      </div>
    </div>
  );
};

export default Filter;
