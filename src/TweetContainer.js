import React from "react";
import Tweet from "./Tweet"

const TweetContainer = ({ totalTweets, handleTweetRemoval }) => (
  <div className="tweet-container">
    {totalTweets.map((tweet, index) => (
      <Tweet 
        key={tweet.id} {...tweet} 
        currentPosition={index + 1} 
        totalTweets={totalTweets} 
        handleTweetRemoval={handleTweetRemoval} />
    ))}
  </div>
);

export default TweetContainer;