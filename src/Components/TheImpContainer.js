import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobg from "./Videobg";

export default function TheImpContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];


  const { original_title, overview, id, key } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Videobg movieId={id} key={key} />
    </div>
  );
}
