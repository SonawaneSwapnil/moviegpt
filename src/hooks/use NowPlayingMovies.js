import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utills/moviesSLice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constant";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
