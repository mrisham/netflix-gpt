import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BG_URL } from "../utils/contants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BG_URL} alt="body-bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
