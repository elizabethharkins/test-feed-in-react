import React, { useState, useEffect } from "react";
import totalTweets from "./data.json";
import TweetContainer from "./TweetContainer";
import { alphabetizeTweetsByHandle } from "./utils";

const App = () => {
  const initialListOfTweets = alphabetizeTweetsByHandle(totalTweets.data);
  const [listOfTweets, setListOfTweets] = useState(initialListOfTweets);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setTitle(data.title));
  }, []);

  const handleTweetRemoval = (id) => {
    const updatedListOfTweets = listOfTweets.filter((tweet) => tweet.id !== id);

    setListOfTweets(updatedListOfTweets);
  };

  return (
    <div className="App">
      <h2>{title}</h2>
      <TweetContainer totalTweets={listOfTweets} handleTweetRemoval={handleTweetRemoval} />
    </div>
  );
};

export default App;