import React, { useEffect, useState } from "react";
import CocktailbyID from "./CocktailbyID";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchID, setSearchID] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [alternativeCocktails, setAlternativeCocktails] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchID("");
    setErrorMessage("");
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
      const initialDrink = data.drinks?.[0];
      if (initialDrink) {
        setSearchID(initialDrink.idDrink || []);
      } else {
        setErrorMessage("No cocktail is found");
        // If no match is found, fetch other suggestions
        const alternativeRes = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm.slice(
            0,
            1
          )}`
        );
        const alternativeData = await alternativeRes.json();
        setAlternativeCocktails(alternativeData.drinks || []);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setErrorMessage("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchID("");
      setErrorMessage("");
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
      {errorMessage && <h2>{errorMessage}</h2>}
      <div>
        {searchID && !errorMessage && (
          <CocktailbyID id={searchID}></CocktailbyID>
        )}
        {!searchID && alternativeCocktails.length > 0 && (
          <div>
            <h2>Alternative Cocktails You Can Search For...</h2>
            <ul>
              {alternativeCocktails.slice(0, 5).map((cocktail) => (
                <li className="centered" key={cocktail.idDrink}>
                  {cocktail.strDrink}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
