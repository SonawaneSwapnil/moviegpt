import React, { useEffect } from "react";
import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/use NowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import TheImpContainer from "./TheImpContainer";

export default function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <TheImpContainer />
      <SecondaryContainer />
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
