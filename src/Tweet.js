import React from "react";
import { truncateText, useToggle } from "./utils";

const TEXT_LIMIT = 50;

const tweetStyles = {
  outer: {
    border: "3px solid mediumslateblue",
    background: "#eaedf0",
    fontWeight: 500
  },
  inner: {
    paddingRight: "20px"
  },
  contentUpper: {
    display: "flex",
    justifyContent: "space-between"
  },
  remove: {
    marginTop: "-1em",
    marginRight: "1em",
    background: "none",
    border: "none",
    fontSize: "1em"
  }
}

const Tweet = ({ id, text, author, currentPosition, totalTweets, handleTweetRemoval }) => {
  const [isHighlighted, toggleIsHighlighted] = useToggle();

  return (
    <div className="tweet" id={id} style={!isHighlighted ? {} : tweetStyles.outer}>
      <div className="tweet-body">
        <h4 style={tweetStyles.contentUpper}>
          {author} 
          <input 
            type="button" 
            className="remove-tweet" 
            style={tweetStyles.remove} 
            value="x" onClick={() => handleTweetRemoval(id)} 
          />
          </h4>
        <p 
          style={!isHighlighted ? {} : tweetStyles.inner} 
          className="tweet-text" 
          onClick={toggleIsHighlighted}>{!isHighlighted ? truncateText(text, TEXT_LIMIT) : text}
        </p>
        {isHighlighted && <p className="fineprint">{currentPosition} / {totalTweets.length}</p>}
      </div>
    </div>
  );
};

export default Tweet;