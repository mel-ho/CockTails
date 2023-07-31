import React from "react";

const Cocktail = (props) => {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <img className="cocktail" src={props.thumbnail} alt=""></img>
      <div>
        <p>
          <strong>Category: </strong>
          {props.category}
        </p>
        <p>
          <strong>Alcohol: </strong>
          {props.alcohol}
        </p>
        <p>
          <strong>Glass Type: </strong>
          {props.glass}
        </p>
        <p>
          <strong>Instructions: </strong>
          {props.instructions}
        </p>
        <p>
          <strong>Ingredients: </strong> <br />
          {props.ingredient1str} {props.ingredient1} <br />
          {props.ingredient2str} {props.ingredient2} <br />
          {props.ingredient3str} {props.ingredient3} <br />
          {props.ingredient4str} {props.ingredient4} <br />
          {props.ingredient5str} {props.ingredient5} <br />
          {props.ingredient6str} {props.ingredient6} <br />
          {props.ingredient7str} {props.ingredient7}
        </p>
      </div>
    </div>
  );
};

export default Cocktail;
