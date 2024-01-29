import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constant";
import { addTopRatedMovies } from "../utills/moviesSLice";
import { useEffect } from "react";

export const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
