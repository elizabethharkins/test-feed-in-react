import React, { useState } from "react";

export const tweetDataIsVerified = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

export const alphabetizeTweetsByHandle = (arr) => {
  if (!tweetDataIsVerified(arr)) return;

  const sortedTweets = arr.sort((a, b) => {
    return a.author === b.author ? 0 : a.author < b.author ? -1 : 1;
  });

  return sortedTweets;
};

export const truncateText = (string, limit) => {
  if (string.length <= limit) {
    return string;
  };

  return string.slice(0, limit) + "...";
};

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle];
};