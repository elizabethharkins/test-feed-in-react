import React, { useState } from "react";
import totalTweets from "./data.json";
import TweetContainer from "./TweetContainer";
import { alphabetizeTweetsByHandle } from "./utils";

const App = () => {
  const initialListOfTweets = alphabetizeTweetsByHandle(totalTweets.data);
  const [listOfTweets, setListOfTweets] = useState(initialListOfTweets);

  const handleTweetRemoval = (id) => {
    const updatedListOfTweets = listOfTweets.filter((tweet) => tweet.id !== id);

    setListOfTweets(updatedListOfTweets);
  };

  return (
    <div className="App">
      <h2>Feed, Feed, Feed</h2>
      <TweetContainer totalTweets={listOfTweets} handleTweetRemoval={handleTweetRemoval} />
    </div>
  );
};

export default App;