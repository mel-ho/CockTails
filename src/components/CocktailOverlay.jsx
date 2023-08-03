import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      <div className={styles.modal}>
        <img className="thumbnail" src={props.thumbnail} alt=""></img>
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
          <br />
          <strong>Instruction: </strong>
          {props.instruction}
          <br />
          <strong>Ingredients: </strong> <br />
          {props.strMeasure1} {props.strIngredient1} <br />
          {props.strMeasure2} {props.strIngredient2} <br />
          {props.strMeasure3} {props.strIngredient3} <br />
          {props.strMeasure4} {props.strIngredient4} <br />
          {props.strMeasure5} {props.strIngredient5} <br />
          {props.strMeasure6} {props.strIngredient6} <br />
          {props.strMeasure7} {props.strIngredient7}
        </p>
      </div>
    </div>
  );
};

const CocktailOverlay = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <img
        className="thumbnail"
        src={props.thumbnail}
        alt=""
        onClick={handleImageClick}
      />
      <h2>{props.name}</h2>
      {showOverlay &&
        ReactDOM.createPortal(
          <Overlay
            id={props.id}
            name={props.name}
            category={props.category}
            alcohol={props.alcohol}
            glass={props.glass}
            instruction={props.instruction}
            strMeasure1={props.strMeasure1}
            strIngredient1={props.strIngredient1}
            strMeasure2={props.strMeasure2}
            strIngredient2={props.strIngredient2}
            strMeasure3={props.strMeasure3}
            strIngredient3={props.strIngredient3}
            strMeasure4={props.strMeasure4}
            strIngredient4={props.strIngredient4}
            strMeasure5={props.strMeasure5}
            strIngredient5={props.strIngredient5}
            strMeasure6={props.strMeasure6}
            strIngredient6={props.strIngredient6}
            strMeasure7={props.strMeasure7}
            strIngredient7={props.strIngredient7}
            onClose={handleCloseOverlay}
          />,
          document.querySelector("#modal-root")
        )}
    </>
  );
};

export default CocktailOverlay;
