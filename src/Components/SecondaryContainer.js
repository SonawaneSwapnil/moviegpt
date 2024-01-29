import React from "react";
import MoList from "./MoList";
import { useSelector } from "react-redux";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-55 pl-12 relative z-20">
          <MoList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoList title={"Upcoming"} movies={movies.upComing} />
          <MoList title={"Popular"} movies={movies.popularMovies} />
          <MoList title={"Top Rated"} movies={movies.topRated} />
        </div>
      </div>
    )
  );
}
