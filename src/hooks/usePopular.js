import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constant";
import { addPopularMovies } from "../utills/moviesSLice";

export const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
