import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const topRatedMovie = useSelector((store) => store.movies.topRatedMovie);
  const dispach = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispach(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovie && getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
