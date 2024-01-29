import React, { useEffect } from "react";
import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/use NowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import TheImpContainer from "./TheImpContainer";
import { useTopRated } from "../hooks/useTopRated";
import {usePopular} from "../hooks/usePopular"
export default function Browse() {
  useTopRated();
  useNowPlayingMovies();
  usePopular()
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
