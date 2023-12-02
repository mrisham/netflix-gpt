import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-[260px] relative z-20 pl-4 md:pl-12">
          <MovieList title={"Now Playing"} movies={movies.topRatedMovie} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
