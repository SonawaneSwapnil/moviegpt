import React, { useEffect } from "react";
import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/use NowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import TheImpContainer from "./TheImpContainer";
import { useTopRated } from "../hooks/useTopRated";
import { usePopular } from "../hooks/usePopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
export default function Browse() {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  useTopRated();
  useNowPlayingMovies();
  usePopular();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <TheImpContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
    mainContainer
    --videocontainer
    -videotitle
    Secondary Container
    --movieslist
    -cards
    */}
    </div>
  );
}
