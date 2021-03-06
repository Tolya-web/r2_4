import React from "react";
import "./input-search.scss";

const InputSearch = ({ onSearch }) => {
  return (
    <input
      type="text"
      id="searchField"
      placeholder="Type here to search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default InputSearch;
