import React, { useState } from "react";
import Button from "../button/Button";
import CharCounter from "../charcounter/CharCounter";
import css from "./textinput.module.css";
import { MAX_CHAR, COLORS } from "../util/Util";

export default function TextInput({ handleInsert }) {
  const [charRemaining, setCharRemaining] = useState(MAX_CHAR);
  const [charAlertZone, setCharAlertZone] = useState(COLORS.allowed);
  const [disabledButton, setDisabledButton] = useState(false);

  const calculateChars = (e) => {
    let count = e.target.value.length;
    let result = MAX_CHAR - count;
    setCharRemaining(result);
    checkAlertZone(result);
  };

  const checkAlertZone = (result) => {
    if (result < 0) {
      setCharAlertZone(COLORS.blocked);
      setDisabledButton(true);
    } else if (result < 10) {
      setCharAlertZone(COLORS.caution);
      setDisabledButton(false);
    } else {
      setCharAlertZone(COLORS.allowed);
    }
  };

  const sendTweet = (e) => {
    if (e.ctrlKey && e.key === "Enter" && e.target.value.trim().length > 0) {
      setCharRemaining(MAX_CHAR);
      handleInsert(e.target.value.trim());
      e.target.value = "";
    }
  };

  const sendTweetButton = (e) => {
    let textarea = document.querySelector("#textarea");
    handleInsert(textarea.value.trim());
    textarea.value = "";
    textarea.focus();
  };

  return (
    <div>
      <div>
        <label className={css.labelfor}>
          Escreva aqui:
          <textarea
            id="textarea"
            className={css.border}
            onChange={calculateChars}
            onKeyUp={sendTweet}
            rows="8"
          />
        </label>
      </div>
      <div>
        <CharCounter
          charRemaining={charRemaining}
          charAlertZone={charAlertZone}
        />
        <Button isDisabled={disabledButton} onButtonClick={sendTweetButton} />
      </div>
    </div>
  );
}
