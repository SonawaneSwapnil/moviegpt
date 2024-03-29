import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utills/constant";
import { addTrailerVideos } from "../utills/moviesSLice";

export const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getMovies();
  }, []);
};
