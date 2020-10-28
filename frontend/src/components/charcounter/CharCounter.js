import React from "react";
import css from "./charcounter.module.css";

export default function CharCounter({ charRemaining, charAlertZone }) {
  return (
    <p style={{ color: charAlertZone }} className={`${css.alignleft}`}>
      {charRemaining} caracter(res) restante(s)
    </p>
  );
}
