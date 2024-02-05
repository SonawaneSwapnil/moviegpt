import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utills/constant";

export default function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}
