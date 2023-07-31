import React from "react";

const CocktailShort = (props) => {
  return (
    <tr>
      <td>
        <img className="thumbnail" src={props.thumbnail} alt=""></img>
      </td>
      <td>
        <h3>
          <strong>{props.name}</strong>
        </h3>
        <p>
          <strong>Category: </strong>
          {props.category}
          <br />
          <strong>Alcohol: </strong>
          {props.alcohol}
          <br />
          <strong>Glass Type: </strong>
          {props.glass}
        </p>
      </td>
    </tr>
  );
};

export default CocktailShort;
