import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailerVedio = useSelector((store) => store.movies.trailerVedio);
  const dispatch = useDispatch();
  //fetching the trailer && updating the store with the trailer
  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVedio(trailer));
  };
  useEffect(() => {
    !trailerVedio && getMovieVedios();
  }, []);
};

export default useMovieTrailer;
