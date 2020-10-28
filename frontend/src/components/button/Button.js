import React from "react";
import css from "./button.module.css";

export default function Button({ isDisabled, onButtonClick }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onButtonClick}
      className={`waves-effect waves-light btn ${css.alignright}`}
    >
      TWITTAR
    </button>
  );
}
