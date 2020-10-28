import "./App.css";
import React, { useState, useEffect } from "react";
import TextInput from "./components/textinput/TextInput";
import Tweets from "./components/tweet/Tweets";
import * as t from "./api/FetchData";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await t.getAllTweets();
      setTweets(data);
    };
    getData();
  }, []);

  const handleInsert = (value) => {
    let newId = uuidv4();
    const newArr = Object.assign([], tweets);
    const tweet = {
      id: newId,
      value,
    };
    if (t.insertTweet(tweet)) {
      newArr.push(tweet);
      setTweets(newArr);
    }
  };

  const handleDelete = (e) => {
    let clickedId = e.target.id;
    if (t.deleteTweet(clickedId)) {
      const filteredArray = (tweet) => {
        if (tweet.id !== clickedId) {
          return true;
        }
        return false;
      };

      setTweets(tweets.filter(filteredArray));
    }
  };

  return (
    <div>
      <h3 className="container center">React Twitter</h3>
      <TextInput handleInsert={handleInsert} />
      <div>
        <Tweets tweets={tweets} onDelete={handleDelete} />
      </div>
    </div>
  );
}
