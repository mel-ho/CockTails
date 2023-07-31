import React from "react";

const CocktailShort = (props) => {
  return (
    <tr>
      <td>
        <img className="thumbnail" src={props.thumbnail} alt=""></img>
      </td>
      <td>
        <p>
          <strong>{props.name}</strong>
        </p>
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
