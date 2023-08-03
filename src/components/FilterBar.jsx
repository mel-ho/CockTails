import React, { useEffect, useState } from "react";

const FilterBar = (props) => {
  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
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
    getAlcoholic();
  }, []);

  return (
    <div>
      <div>
        <label className="col-md-3">Category</label>
        <select onChange={props.onCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((item, idx) => {
            return <option key={idx}>{item.strCategory}</option>;
          })}
        </select>
      </div>
      <div>
        <label className="col-md-3">Glasses</label>
        <select onChange={props.onGlassChange}>
          <option value="">Select Glass</option>
          {glasses.map((item, idx) => {
            return <option key={idx}>{item.strGlass}</option>;
          })}
        </select>
      </div>
      <div>
        <label className="col-md-3">Alcoholic</label>
        <select onChange={props.onAlcoholicChange}>
          <option value="">Select Alcoholic Level</option>
          {alcoholic.map((item, idx) => {
            return <option key={idx}>{item.strAlcoholic}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
