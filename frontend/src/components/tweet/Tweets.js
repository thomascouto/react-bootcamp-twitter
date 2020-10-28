import React from "react";
import css from "./tweets.module.css";

export default function Tweets({ onDelete, tweets }) {
  return (
    <div>
      <ul className={`collection with-header`}>
        {tweets !== null &&
          tweets.map((tweet) => {
            return (
              <li key={tweet.id} className={`${css.item} collection-item`}>
                <div>
                  {tweet.value}
                  <i
                    id={tweet.id}
                    onClick={onDelete}
                    className={`material-icons ${css.icon} ${css.cur}`}
                  >
                    delete_forever
                  </i>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
