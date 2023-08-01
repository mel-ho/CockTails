import React, { useEffect, useState } from "react";
import CocktailbyID from "./CocktailbyID";

const DIYSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchID, setSearchID] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
      const initialDrink = data.drinks?.[0];
      if (initialDrink) {
        setSearchID(initialDrink.idDrink || []);
      } else {
        setSearchID("");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchID("");
    }
  }, [searchTerm]);

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
      <div>{searchID && <CocktailbyID id={searchID}></CocktailbyID>}</div>
    </div>
  );
};

export default DIYSearch;
