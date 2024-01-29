import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constant";
import { useEffect } from "react";
import { addUpComingMovies } from "../utills/moviesSLice";

export const useUpcoming = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};
